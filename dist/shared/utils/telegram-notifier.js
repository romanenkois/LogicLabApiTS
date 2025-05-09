"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTelegramMessage = sendTelegramMessage;
const _config_1 = require("../../config/index.js");
const url = `https://api.telegram.org/bot${_config_1.telegramConfig.botId}/sendMessage?chat_id=${_config_1.telegramConfig.adminChatId}&text=`;
function sendTelegramMessage(text) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url + text);
        try {
            if (response.status === 200) {
                console.log('Message sent successfully');
            }
        }
        catch (error) {
            console.log('Message sending failed', response);
        }
    });
}
