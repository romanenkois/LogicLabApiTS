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
exports.AuthorizationService = void 0;
const _services_1 = require("../index.js");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const _config_1 = require("../../config/index.js");
const bcrypt_1 = __importDefault(require("bcrypt"));
class AuthorizationService {
    static logInUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if ('token' in params) {
                const userToken = this.verifyUserToken(params.token);
                if (!userToken) {
                    return null;
                }
                const user = yield _services_1.UserService.getUser({ _id: userToken.userId });
                if (!user) {
                    return null;
                }
                const newToken = this.generateUserToken({
                    userId: user._id.toString(),
                    email: user.email,
                });
                return { user: user, token: newToken };
            }
            else {
                const user = yield _services_1.UserService.getUser({
                    email: params.userCredentials.email,
                });
                if (user) {
                    const passwordMatch = yield bcrypt_1.default.compare(params.userCredentials.password, user.password);
                    if (passwordMatch) {
                        const token = this.generateUserToken({
                            userId: user._id.toString(),
                            email: user.email,
                        });
                        return { user: user, token: token };
                    }
                }
                return null;
            }
        });
    }
    static generateUserToken(params) {
        const payload = {
            userId: params.userId,
            email: params.email,
            role: 'user',
        };
        const signature = _config_1.authConfig.userSecret;
        const options = {
            algorithm: _config_1.authConfig.userAlgorithm,
            expiresIn: _config_1.authConfig.userExpiration,
            issuer: _config_1.authConfig.userIssuer,
        };
        return jsonwebtoken_1.default.sign(payload, signature, options);
    }
    static verifyUserToken(token) {
        const signature = _config_1.authConfig.userSecret;
        const options = {
            algorithm: _config_1.authConfig.userAlgorithm,
            issuer: _config_1.authConfig.userIssuer,
        };
        try {
            return jsonwebtoken_1.default.verify(token, signature, options);
        }
        catch (error) {
            return null;
        }
    }
}
exports.AuthorizationService = AuthorizationService;
