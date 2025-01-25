import { appConfig } from "@config";

const url = `https://api.telegram.org/bot${appConfig.telegram.botId}/sendMessage?chat_id=${appConfig.telegram.adminChatId}&text=`;

export function sendTelegramMessage(text: string) {
  const responce: any = fetch(url + text)
  // try {
    if (responce.status === 200) {
      console.log('Message sent successfully');
    } else {
      console.log('Message sending failed', responce);
    }
  // }
}
