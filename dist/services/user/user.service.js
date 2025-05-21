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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const _database_1 = require("../../database/index.js");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    static registerUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield _database_1.MongoDB.getDB();
            const hashedPassword = yield bcrypt_1.default.hash(user.password, this.SALT_ROUNDS);
            const _user = {
                email: user.email,
                password: hashedPassword,
                isBanned: false,
                userInfo: {
                    name: user.userInfo.name,
                    profilePicture: user.userInfo.profilePicture
                        ? user.userInfo.profilePicture
                        : '',
                },
                createdAt: new Date(),
                updatedAt: new Date(),
                lastLogin: new Date(),
            };
            const hasTheSameEmail = yield db
                .collection('users')
                .findOne({ email: _user.email });
            if (hasTheSameEmail) {
                return null;
            }
            const response = yield db.collection('users').insertOne(_user);
            if (response.insertedId) {
                const user__ = yield this.getUser({ email: _user.email });
                if (user__) {
                    return user__;
                }
            }
            throw new Error('User registration failed');
        });
    }
    static getUser(param) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield _database_1.MongoDB.getDB();
            const query = {};
            if ('email' in param) {
                query.email = param.email;
            }
            else if ('_id' in param) {
                query._id = param._id;
            }
            else {
                return null;
            }
            const response = yield db
                .collection('users')
                .findOne(query);
            return response ? response : null;
        });
    }
    static getUsers(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield _database_1.MongoDB.getDB();
            const users = [];
            for (const id of ids) {
                const user = yield this.getUser({ _id: id });
                if (user) {
                    users.push(user);
                }
            }
            return users;
        });
    }
    // idk even why this exists, but let it be
    static banUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const collectionName = 'users';
            const db = yield _database_1.MongoDB.getDB();
            const userExists = yield this.getUser({ _id: userId });
            if (!userExists) {
                throw new Error('User to ban not found');
            }
            const response = yield db
                .collection(collectionName)
                .updateOne({ _id: userId }, { $set: { isBanned: true } });
            if (response.modifiedCount === 1) {
                const user = yield this.getUser({ _id: userId });
                if (user) {
                    return user;
                }
            }
            return null;
        });
    }
}
exports.UserService = UserService;
UserService.SALT_ROUNDS = 10;
