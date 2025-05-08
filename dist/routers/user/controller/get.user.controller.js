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
exports.getUser = void 0;
const _utils_1 = require("../../../shared/utils/index.js");
const _services_1 = require("../../../services/index.js");
const mongodb_1 = require("mongodb");
const _mappers_1 = require("../../../shared/mappers/index.js");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query['userid'];
        if (!id || id.trim() === '') {
            res.status(400).json({ message: 'User ID is required' });
            return;
        }
        const user = yield _services_1.UserService.getUser({
            _id: new mongodb_1.ObjectId(id),
        });
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
exports.getUser = getUser;
