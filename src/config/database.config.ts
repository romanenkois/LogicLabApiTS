export const databaseConfig = {
  mongo: {
    connectionUri: process.env.MONGODB_CONNECTION_URI,
    dbName: process.env.MONGODB_DATABASE_NAME,
  },
}
