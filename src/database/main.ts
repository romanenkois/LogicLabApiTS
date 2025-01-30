import { MongoClient, ServerApiVersion } from 'mongodb';
import { appConfig } from '@config';

export abstract class MongoDB {
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
    } finally {
      await this.client.close();
    }
  }

  public static getDB() {
    if (!this.dbConnected) {
      throw new Error('MongoDB is not connected');
    } else {
      return this.$database;
    }
  }

  // doesn't work
  // constructor() {
  //   if (!MongoDB.connectionUri || MongoDB.connectionUri === '') {
  //     throw new Error('MongoDB connection URI is not provided');
  //   }
  //   if (!MongoDB.dbName || MongoDB.dbName === '') {
  //     throw new Error('MongoDB database name is not provided');
  //   }
  // }
}
