import { Router, Request, Response } from 'express';
import { appConfig } from '@config';

export const defaultRouter = Router();

defaultRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send(appConfig.other.basic_page_response);
});
