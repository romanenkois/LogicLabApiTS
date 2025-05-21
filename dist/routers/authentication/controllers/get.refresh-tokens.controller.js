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
exports.refreshTokens = void 0;
const _utils_1 = require("../../../shared/utils/index.js");
const _services_1 = require("../../../services/index.js");
const refreshTokens = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token = req.query['token'];
        if (!token || token.trim() === '') {
            res.status(400).json({
                message: 'Token is required',
            });
            return;
        }
        const token_ = _services_1.AuthorizationService.verifyUserRefreshToken(token);
        if (!token_ || !token_.userId || !token_.email) {
            res.status(403).json({ message: 'Invalid token' });
            return;
        }
        const newRefreshToken = _services_1.AuthorizationService.generateUserRefreshToken({
            userId: token_.userId,
            email: token_.email,
        });
        const newAccessToken = _services_1.AuthorizationService.generateUserAccessToken({
            userId: token_.userId,
            email: token_.email,
        });
        if (newAccessToken && newRefreshToken) {
            res.status(201).json({
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
            });
            return;
        }
        else {
            // we mask if user exists or not
            res.status(404).json({ message: 'Failed to refresh' });
            return;
        }
    }
    catch (error) {
        (0, _utils_1.errorHandler)(res, error);
    }
});
exports.refreshTokens = refreshTokens;
