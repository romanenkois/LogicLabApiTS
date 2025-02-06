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
const _config_1 = require("../shared/config/index.js");
class MongoDB {
    static connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect();
                yield this.client.db(this.dbName).command({ ping: 1 }); // ping to test connection
                this.dbConnected = true;
                this.$database = this.client.db(this.dbName);
                if (_config_1.appConfig.logging.console.onDataBaseConnect) {
                    console.log('MongoDB connected');
                }
            }
            catch (error) {
                console.error('MongoDB connection error:', error);
            }
        });
    }
    static getDB() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.dbConnected) {
                yield this.connect();
                if (this.$database) {
                    return this.$database;
                }
                // console.error('MongoDB is not connected');
            }
            else {
                return this.$database;
            }
        });
    }
}
exports.MongoDB = MongoDB;
_a = MongoDB;
MongoDB.connectionUri = _config_1.appConfig.database.mongo.connectionUri;
MongoDB.dbName = _config_1.appConfig.database.mongo.dbName;
MongoDB.client = new mongodb_1.MongoClient(_a.connectionUri || '', {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
MongoDB.dbConnected = false;
MongoDB.$database = null;
