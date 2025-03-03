import { appDeployment } from "./app.config";

export const loggingConfig = {
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
  }
}