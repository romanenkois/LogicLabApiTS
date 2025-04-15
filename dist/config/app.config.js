"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = exports.appDeployment = void 0;
const envs_1 = require("./envs");
exports.appDeployment = envs_1.envs.appDeployment || 'production';
exports.appConfig = {
    port: process.env.PORT || 3000,
    // host: process.env.HOST || '0.0.0.0',
    headerSizeLimit: 10 * 1024,
    bodySizeLimit: 10 * 1024 * 1024,
};
