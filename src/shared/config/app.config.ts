import dotenv from 'dotenv';
dotenv.config();

export const appDeployment: 'development' | 'production' = (process.env.APP_DEPLOYMENT as 'development' | 'production') || 'production';

export const appConfig = {
  server: {
    // localHost: process.env.LOCAL_HOST || false, // determines, if host value is used
    port: process.env.PORT || 3000,
    // host: process.env.HOST || '0.0.0.0',
  },
  logging: {
    console: {
      onServerStart: true,
      onDataBaseConnect: true,
      onRequset: true,
    },
    file: {
      onRequset: false,
    },
    telegram: {
      onServerStart: appDeployment === 'production' ? true : false,
    },
  },
  database: {
    mongo: {
      connectionUri: process.env.MONGODB_CONNECTION_URI,
      dbName: process.env.MONGODB_DATABASE_NAME,
    }
  },
  telegram: {
    botId: process.env.TELEGRAM_BOT_ID,
    adminChatId: process.env.TELEGRAM_ADMIN_ID,
  },
  other: {
    // link to router documentation
    apiDocumentationLink: process.env.LOGICLAB_API_DOCUMENTATION_URL || '#',
    // link to itself hosted url
    logicLab_link: process.env.LOGICLAB_URL || '#',
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

    headerSizeLimit: 10 * 1024,
    bodySizeLimit: 10 * 1024 * 1024,
    
  },
  featureFlags: {

  },
};

// Needed to fix issue of assigning values to basic page before config is innitialized
appConfig.other.basic_page_response = appConfig.other.basic_page_response
  .replace('__API_DOC_LINK__', appConfig.other.apiDocumentationLink)
  .replace('__LOGIC_LAB_LINK__', appConfig.other.logicLab_link);
