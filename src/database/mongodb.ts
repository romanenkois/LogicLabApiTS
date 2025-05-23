import { Db, MongoClient, ServerApiVersion } from 'mongodb';
import { loggingConfig, databaseConfig } from '@config';

export class MongoDB {
  private static readonly connectionUri = databaseConfig.mongo.connectionUri;
  private static readonly dbName = databaseConfig.mongo.dbName;
  private static readonly client = new MongoClient(this.connectionUri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  private static $database: Db | null = null;

  public static async connect(depth: number = 0): Promise<void> {
    console.log('MongoDB connecting...');
    try {
      await this.client.connect();
      await this.client.db(this.dbName).command({ ping: 1 }); // ping to test connection
      this.$database = this.client.db(this.dbName);
      if (loggingConfig.console.onDataBaseConnect) {
        console.log('MongoDB connected');
      }
    } catch (error) {
      console.log('MongoDB connection failed');

      if (depth < databaseConfig.mongo.maxConnectionAttempts) {
        console.log(
          `Retrying MongoDB connection in ${
            databaseConfig.mongo.connectTimeout / 1000
          } seconds for ${depth + 1} time...`
        );
        await new Promise((resolve) =>
          setTimeout(resolve, databaseConfig.mongo.connectTimeout)
        );
        await this.connect(depth + 1);
      } else {
        throw new Error(
          `MongoDB connection failed after ${depth} attempts: ${error}`
        );
      }
    }
  }

  public static async getDB(): Promise<Db> {
    if (!this.$database) {
      await this.connect();
      if (this.$database) {
        return this.$database;
      } else {
        throw new Error('MongoDB connection failed');
      }
    } else {
      return this.$database;
    }
  }
}
