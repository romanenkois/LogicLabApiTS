import dotenv from 'dotenv';
dotenv.config();

export const telegramConfig = {
  botId: process.env.TELEGRAM_BOT_ID,
  adminChatId: process.env.TELEGRAM_ADMIN_ID,
}