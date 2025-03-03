import { Router, Request, Response } from 'express';
import { sharedConfig } from '@config';

export const defaultRouter = Router();

defaultRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send(sharedConfig.basic_page_response);
});
