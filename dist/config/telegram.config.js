"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramConfig = void 0;
const _config_1 = require("./index.js");
exports.telegramConfig = {
    botId: _config_1.envs.telegramBotId,
    adminChatId: _config_1.envs.telegramAdminChatId,
};
