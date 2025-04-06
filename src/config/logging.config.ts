import { appDeployment } from "./app.config";

export const loggingConfig = {
  console: {
    onServerStart: true,
    onDataBaseConnect: true,
    onRequest: true,
  },
  file: {
    onRequest: false,
  },
  telegram: {
    onServerStart: appDeployment === 'production' ? true : false,
  }
}
