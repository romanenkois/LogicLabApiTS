import { Router, Request, Response } from 'express';
import { appConfig } from '@config';
import { getTestData } from './controllers/get.test-data.controller';
import { checkTestAnswer } from './controllers/post.test-check.controllers';

export const testsRouter = Router();

testsRouter.get('/test',
  (req: Request, res: Response, next) => {
    if (appConfig.logging.console.onRequset) {
      console.log('GET /courses-list');
    }
    next();
  },
  getTestData
);

testsRouter.post('/checkTest',
  (req: Request, res: Response, next) => {
    if (appConfig.logging.console.onRequset) {
      console.log('POST /checkTest');
    }
    next();
  },
  checkTestAnswer
);
