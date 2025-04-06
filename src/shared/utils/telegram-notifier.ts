import { telegramConfig } from "@config";

const url = `https://api.telegram.org/bot${telegramConfig.botId}/sendMessage?chat_id=${telegramConfig.adminChatId}&text=`;

export async function sendTelegramMessage(text: string) {
  const response = await fetch(url + text)
  try {
    if (response.status === 200) {
      console.log('Message sent successfully');
    }
  } catch (error) {
    console.log('Message sending failed', response);
  }
}
