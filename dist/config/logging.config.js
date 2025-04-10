"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggingConfig = void 0;
const app_config_1 = require("./app.config");
exports.loggingConfig = {
    console: {
        onServerStart: true,
        onDataBaseConnect: true,
        onRequest: true,
    },
    file: {
        onRequest: false,
    },
    telegram: {
        onServerStart: app_config_1.appDeployment === 'production' ? true : false,
    }
};
