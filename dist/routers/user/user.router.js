"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const get_user_controller_1 = require("./controller/get.user.controller");
const get_user_private_controller_1 = require("./controller/get.user-private.controller");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/user', get_user_controller_1.getUser);
exports.userRouter.get('/user-private', get_user_private_controller_1.getUserPrivate);
