"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const _config_1 = require("./index.js");
exports.databaseConfig = {
    mongo: {
        connectionUri: _config_1.envs.mongodbConnectionUri,
        dbName: _config_1.envs.mongodbDbName,
        maxConnectionAttempts: 5,
        connectTimeout: 1000,
    },
};
