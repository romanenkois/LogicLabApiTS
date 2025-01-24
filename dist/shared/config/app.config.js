"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.appConfig = {
    server: {
        local_host: process.env.LOCAL_HOST || false,
        port: process.env.PORT || 3000,
        host: process.env.HOST || '0.0.0.0',
    },
    telegram: {
        botId: process.env.TELEGRAM_BOT_ID,
        adminChatId: process.env.TELEGRAM_ADMIN_ID,
    },
    other: {
        api_documentation_link: 'https://github.com/romanenkois/logicLab',
        logicLab_link: '#',
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
        }
    }
};
// Needed to fix issue of assigning values to basic page before config is innitialized 
// this.config.other.basic_page_response = config.other.basic_page_response
//     .replace('__API_DOC_LINK__', config.other.api_documentation_link)
//     .replace('__LOGIC_LAB_LINK__', config.other.logicLab_link);
