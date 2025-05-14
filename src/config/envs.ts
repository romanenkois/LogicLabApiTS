import dotenv from 'dotenv';
dotenv.config();

export const envs = {
  appDeployment: process.env.APP_DEPLOYMENT || (() => { console.warn('Missing non critical environment variable') })(),
  port: process.env.PORT || (() => { console.warn('Missing non critical environment variable') })(),

  jwtUserAccessSecret: process.env.JWT_USER_ACCESS_SECRET || (() => { throw new Error('Missing environment variable in config') })(),
  jwtUserAccessExpiration: process.env.JWT_USER_ACCESS_EXPIRATION || (() => { throw new Error('Missing environment variable in config') })(),
  jwtUserAccessAlgorithm: process.env.JWT_USER_ACCESS_ALGORITHM || (() => { throw new Error('Missing environment variable in config') })(),
  jwtUserAccessIssuer: process.env.JWT_USER_ACCESS_ISSUER || (() => { throw new Error('Missing environment variable in config') })(),

  jwtUserRefreshSecret: process.env.JWT_USER_REFRESH_SECRET || (() => { throw new Error('Missing environment variable in config') })(),
  jwtUserRefreshExpiration: process.env.JWT_USER_REFRESH_EXPIRATION || (() => { throw new Error('Missing environment variable in config') })(),
  jwtUserRefreshAlgorithm: process.env.JWT_USER_REFRESH_ALGORITHM || (() => { throw new Error('Missing environment variable in config') })(),
  jwtUserRefreshIssuer: process.env.JWT_USER_REFRESH_ISSUER || (() => { throw new Error('Missing environment variable in config') })(),

  mongodbConnectionUri: process.env.MONGODB_CONNECTION_URI || (() => { throw new Error('Missing environment variable in config') })(),
  mongodbDbName: process.env.MONGODB_DATABASE_NAME || (() => { throw new Error('Missing environment variable in config') })(),

  telegramBotId: process.env.TELEGRAM_BOT_ID || (() => { console.warn('Missing non critical environment variable') })(),
  telegramAdminChatId: process.env.TELEGRAM_ADMIN_ID || (() => { console.warn('Missing non critical environment variable') })(),

  apiDocumentationLink: process.env.API_DOCUMENTATION_URL || (() => { console.warn('Missing non critical environment variable') })(),
  webAppLink: process.env.WEB_APP_URL || (() => { console.warn('Missing non critical environment variable') })(),
}
