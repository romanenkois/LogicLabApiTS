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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationService = void 0;
const _database_1 = require("../../database/index.js");
class AuthorizationService {
    static registerUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const collectionName = 'users';
            const db = yield _database_1.MongoDB.getDB();
            const _user = user;
            return false;
        });
    }
}
exports.AuthorizationService = AuthorizationService;
