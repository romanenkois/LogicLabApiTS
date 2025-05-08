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
exports.verifyToken = void 0;
const _utils_1 = require("../../../shared/utils/index.js");
const _services_1 = require("../../../services/index.js");
const verifyToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.query.token;
        if (!token) {
            res.status(400).json({
                message: 'Token is required',
            });
            return;
        }
        const response = _services_1.AuthorizationService.verifyUserToken(token);
        if (!response) {
            res.status(401).json({
                message: 'Invalid token',
            });
            return;
        }
        res.status(200).json({
            message: 'Token is valid'
        });
        return;
    }
    catch (error) {
        (0, _utils_1.errorHandler)(res, error);
    }
});
exports.verifyToken = verifyToken;
