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
exports.getUserPrivate = void 0;
const _utils_1 = require("../../../shared/utils/index.js");
const _services_1 = require("../../../services/index.js");
const mongodb_1 = require("mongodb");
const _mappers_1 = require("../../../shared/mappers/index.js");
const getUserPrivate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers.authorization;
        if (!token) {
            res.status(401).json({ message: 'Authorization token is required' });
            return;
        }
        const token_ = _services_1.AuthorizationService.verifyUserToken(token);
        if (!token_ || !token_.userId) {
            res.status(401).json({ message: 'Invalid token' });
            return;
        }
        const user = yield _services_1.UserService.getUser({ _id: new mongodb_1.ObjectId(token_ === null || token_ === void 0 ? void 0 : token_.userId) });
        if (user) {
            res.status(200).json({ user: _mappers_1.UserMapper.schemaToDTO(user) });
            return;
        }
        else {
            res.status(404).json({ message: 'User not found' });
            return;
        }
    }
    catch (error) {
        (0, _utils_1.errorHandler)(res, error);
    }
});
exports.getUserPrivate = getUserPrivate;
