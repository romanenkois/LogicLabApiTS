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
exports.tokenLoginUser = void 0;
const _utils_1 = require("../../../shared/utils/index.js");
const _services_1 = require("../../../services/index.js");
const _mappers_1 = require("../../../shared/mappers/index.js");
const tokenLoginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token = req.headers.authorization;
        token = token.split(' ')[1];
        if (!token) {
            res.status(400).json({
                message: 'Token is required',
            });
            return;
        }
        const result = yield _services_1.AuthorizationService.logInUser({
            token: token,
        });
        if (result) {
            const { user, accessToken, refreshToken } = result;
            res
                .status(201)
                .json({
                user: _mappers_1.UserMapper.schemaToPrivateDTO(user),
                accessToken: accessToken,
                refreshToken: refreshToken,
            });
            return;
        }
        else {
            // we mask if user exists or not
            res.status(404).json({ message: 'Failed to login' });
            return;
        }
    }
    catch (error) {
        (0, _utils_1.errorHandler)(res, error);
    }
});
exports.tokenLoginUser = tokenLoginUser;
