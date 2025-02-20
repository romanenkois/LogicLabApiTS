import { appConfig } from '@config';
import { Request, Response } from 'express';

export const routerHandler = (req: Request, res: Response, next: Function) => {
  if (appConfig.logging.console.onRequset) {
    console.log('Request:', req.method, req.url);
  }
  next();
};
