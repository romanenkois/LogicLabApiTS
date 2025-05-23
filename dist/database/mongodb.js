"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDB = void 0;
const mongodb_1 = require("mongodb");
const _config_1 = require("../config/index.js");
class MongoDB {
    static connect() {
        return __awaiter(this, arguments, void 0, function* (depth = 0) {
            console.log('MongoDB connecting...');
            try {
                yield this.client.connect();
                yield this.client.db(this.dbName).command({ ping: 1 }); // ping to test connection
                this.$database = this.client.db(this.dbName);
                if (_config_1.loggingConfig.console.onDataBaseConnect) {
                    console.log('MongoDB connected');
                }
            }
            catch (error) {
                console.log('MongoDB connection failed');
                if (depth < _config_1.databaseConfig.mongo.maxConnectionAttempts) {
                    console.log(`Retrying MongoDB connection in ${_config_1.databaseConfig.mongo.connectTimeout / 1000} seconds for ${depth + 1} time...`);
                    yield new Promise((resolve) => setTimeout(resolve, _config_1.databaseConfig.mongo.connectTimeout));
                    yield this.connect(depth + 1);
                }
                else {
                    throw new Error(`MongoDB connection failed after ${depth} attempts: ${error}`);
                }
            }
        });
    }
    static getDB() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.$database) {
                yield this.connect();
                if (this.$database) {
                    return this.$database;
                }
                else {
                    throw new Error('MongoDB connection failed');
                }
            }
            else {
                return this.$database;
            }
        });
    }
}
exports.MongoDB = MongoDB;
_a = MongoDB;
MongoDB.connectionUri = _config_1.databaseConfig.mongo.connectionUri;
MongoDB.dbName = _config_1.databaseConfig.mongo.dbName;
MongoDB.client = new mongodb_1.MongoClient(_a.connectionUri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
MongoDB.$database = null;
