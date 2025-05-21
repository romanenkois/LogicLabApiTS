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
exports.registerUser = void 0;
const _utils_1 = require("../../../shared/utils/index.js");
const _services_1 = require("../../../services/index.js");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRegistration = req.body['user'];
        if (!userRegistration ||
            Object.keys(userRegistration).length === 0 ||
            !userRegistration.email ||
            !userRegistration.password ||
            !userRegistration.userInfo.name) {
            res.status(400).json({ message: 'User data is required' });
            return;
        }
        const user_ = yield _services_1.UserService.registerUser(userRegistration);
        if (!user_) {
            res.status(400).json({ message: 'Failed to register' });
            return;
        }
        const userLogin = yield _services_1.AuthorizationService.logInUser({
            userCredentials: {
                email: user_.email,
                password: userRegistration.password,
            },
        });
        if (userLogin) {
            const { user, accessToken, refreshToken } = userLogin;
            res
                .status(201)
                .json({
                message: 'User has successfully registered',
                user: user,
                accessToken: accessToken,
                refreshToken: refreshToken,
            });
            return;
        }
        else {
            res.status(400).json({ message: 'Failed to register' });
            return;
        }
    }
    catch (error) {
        (0, _utils_1.errorHandler)(res, error);
    }
});
exports.registerUser = registerUser;
