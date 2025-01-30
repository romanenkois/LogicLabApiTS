import { MongoClient, ServerApiVersion } from 'mongodb';
import { appConfig } from '@config';

export class MongoDB {
  private static readonly connectionUri = appConfig.database.mongo.connectionUri;
  private static readonly dbName = appConfig.database.mongo.dbName;
  private static readonly client = new MongoClient(this.connectionUri || '', {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  private static dbConnected = false;
  private static $database: any;

  public static async connect() {
    try {
      await this.client.connect();
      await this.client.db(this.dbName).command({ ping: 1 }); // ping to test connection
      this.dbConnected = true;
      this.$database = this.client.db(this.dbName);
      if (appConfig.logging.console.onDataBaseConnect) {
        console.log('MongoDB connected');
      }
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  }

  public static getDB() {
    if (!this.dbConnected) {
      console.error('MongoDB is not connected');
    } else {
      return this.$database;
    }
  }
}
