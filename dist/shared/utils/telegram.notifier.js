"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTelegramMessage = sendTelegramMessage;
const _config_1 = require("../config/index.js");
const url = `https://api.telegram.org/bot${_config_1.appConfig.telegram.botId}/sendMessage?chat_id=${_config_1.appConfig.telegram.adminChatId}&text=`;
function sendTelegramMessage(text) {
    const responce = fetch(url + text);
    // try {
    if (responce.status === 200) {
        console.log('Message sent successfully');
    }
    else {
        console.log('Message sending failed', responce);
    }
    // }
}
