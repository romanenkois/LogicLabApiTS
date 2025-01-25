import dotenv from 'dotenv';
dotenv.config();

export const appConfig = {
  server: {
    localHost: process.env.LOCAL_HOST || false,
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
// this.config.other.basic_page_response = config.other.basic_page_response
//     .replace('__API_DOC_LINK__', config.other.api_documentation_link)
//     .replace('__LOGIC_LAB_LINK__', config.other.logicLab_link);
