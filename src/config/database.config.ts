import { envs } from '@config';

export const databaseConfig = {
  mongo: {
    connectionUri: envs.mongodbConnectionUri,
    dbName: envs.mongodbDbName,

    maxConnectionAttempts: 5,
    connectTimeout: 1000,
  },
}
