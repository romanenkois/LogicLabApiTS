"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authConfig = void 0;
const _config_1 = require("./index.js");
exports.authConfig = {
    userSecret: _config_1.envs.jwtUserSecret,
    userExpiration: _config_1.envs.jwtUserExpiration,
    userAlgorithm: _config_1.envs.jwtUserAlgorithm,
    userIssuer: _config_1.envs.jwtUserIssuer,
};
