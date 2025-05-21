"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authConfig = void 0;
const _config_1 = require("./index.js");
exports.authConfig = {
    user: {
        access: {
            secret: _config_1.envs.jwtUserAccessSecret,
            expiration: _config_1.envs.jwtUserAccessExpiration,
            algorithm: _config_1.envs.jwtUserAccessAlgorithm,
            issuer: _config_1.envs.jwtUserAccessIssuer,
        },
        refresh: {
            secret: _config_1.envs.jwtUserRefreshSecret,
            expiration: _config_1.envs.jwtUserRefreshExpiration,
            algorithm: _config_1.envs.jwtUserRefreshAlgorithm,
            issuer: _config_1.envs.jwtUserRefreshIssuer,
        },
    }
};
