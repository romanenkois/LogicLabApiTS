import { envs } from './envs';

export const appDeployment = envs.appDeployment || 'production';

export const appConfig = {
  port: process.env.PORT || 3000,
  // host: process.env.HOST || '0.0.0.0',
  headerSizeLimit: 10 * 1024,
  bodySizeLimit: 10 * 1024 * 1024,
};
