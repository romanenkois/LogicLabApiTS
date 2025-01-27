"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.appConfig = {
    app: {
        deployment: process.env.NODE_ENV ? process.env.NODE_ENV === 'production' : true, // it ensures that app is production by default
    },
    server: {
        localHost: process.env.LOCAL_HOST || false, // defermins, if host value is used
        port: process.env.PORT || 3000,
        host: process.env.HOST || '0.0.0.0',
    },
    logging: {
        console: {
            onServerStart: true,
            onRequset: true,
        },
        file: {
            onRequset: false,
        },
        telegram: {
            onServerStart: false,
        },
    },
    telegram: {
        botId: process.env.TELEGRAM_BOT_ID,
        adminChatId: process.env.TELEGRAM_ADMIN_ID,
    },
    other: {
        // link to router documentation
        apiDocumentationLink: 'https://github.com/romanenkois/logicLab',
        // link to itself hosted url
        logicLab_link: '#',
        // responce to GET '/'
        basic_page_response: `
      <DOCTYPE html>
      <html>
        <body>
        <h1>You are trying to access logicLabApi</h1>
        <p>Learn more about its usage, by going to <a href="__API_DOC_LINK__">our documentation</a></p>
        <p>If you ended up here by accident, go back to <a href="__LOGIC_LAB_LINK__">logicLab</a></p>
        </body>
      </html>`,
    },
    featureFlags: {
        telegram: {
            sendMessageOnStart: true,
        },
    },
};
// Needed to fix issue of assigning values to basic page before config is innitialized
exports.appConfig.other.basic_page_response = exports.appConfig.other.basic_page_response
    .replace('__API_DOC_LINK__', exports.appConfig.other.apiDocumentationLink)
    .replace('__LOGIC_LAB_LINK__', exports.appConfig.other.logicLab_link);
