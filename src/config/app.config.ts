import dotenv from 'dotenv';
dotenv.config();

export const appDeployment: 'development' | 'production' = (process.env.APP_DEPLOYMENT as 'development' | 'production') || 'production';

export const appConfig = {
  port: process.env.PORT || 3000,
  // host: process.env.HOST || '0.0.0.0', 
  headerSizeLimit: 10 * 1024,
  bodySizeLimit: 10 * 1024 * 1024,
};