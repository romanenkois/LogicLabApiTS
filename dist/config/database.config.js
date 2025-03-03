"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
exports.databaseConfig = {
    mongo: {
        connectionUri: process.env.MONGODB_CONNECTION_URI,
        dbName: process.env.MONGODB_DATABASE_NAME,
    },
};
