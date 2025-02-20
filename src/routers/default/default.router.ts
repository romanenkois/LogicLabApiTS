import { Router, Request, Response } from 'express';
import { appConfig } from '@config';
import { routerHandler } from '@utils';

export const defaultRouter = Router();

defaultRouter.get('/', routerHandler, (req: Request, res: Response) => {
  res.status(200).send(appConfig.other.basic_page_response);
});
