"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationRouter = void 0;
const express_1 = require("express");
const put_register_controller_1 = require("./controllers/put.register.controller");
const post_login_controller_1 = require("./controllers/post.login.controller");
exports.authorizationRouter = (0, express_1.Router)();
exports.authorizationRouter.put('/register', put_register_controller_1.registerUser);
exports.authorizationRouter.post('/login', post_login_controller_1.loginUser);
