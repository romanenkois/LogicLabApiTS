"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.envs = {
    appDeployment: process.env.APP_DEPLOYMENT || (() => { console.warn('Missing non critical environment variable'); })(),
    port: process.env.PORT || (() => { console.warn('Missing non critical environment variable'); })(),
    jwtUserSecret: process.env.JWT_USER_SECRET || (() => { throw new Error('Missing environment variable in config'); })(),
    jwtUserExpiration: process.env.JWT_USER_EXPIRATION || (() => { throw new Error('Missing environment variable in config'); })(),
    jwtUserAlgorithm: process.env.JWT_USER_ALGORITHM || (() => { throw new Error('Missing environment variable in config'); })(),
    jwtUserIssuer: process.env.JWT_USER_ISSUER || (() => { throw new Error('Missing environment variable in config'); })(),
    mongodbConnectionUri: process.env.MONGODB_CONNECTION_URI || (() => { throw new Error('Missing environment variable in config'); })(),
    mongodbDbName: process.env.MONGODB_DATABASE_NAME || (() => { throw new Error('Missing environment variable in config'); })(),
    telegramBotId: process.env.TELEGRAM_BOT_ID || (() => { console.warn('Missing non critical environment variable'); })(),
    telegramAdminChatId: process.env.TELEGRAM_ADMIN_ID || (() => { console.warn('Missing non critical environment variable'); })(),
    apiDocumentationLink: process.env.API_DOCUMENTATION_URL || (() => { console.warn('Missing non critical environment variable'); })(),
    webAppLink: process.env.WEB_APP_URL || (() => { console.warn('Missing non critical environment variable'); })(),
};
