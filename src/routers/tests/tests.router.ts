import { Router, Request, Response } from 'express';
import { appConfig } from '@config';
import { getTestData } from './controllers/get.test-data.controller';
import { checkTestAnswer } from './controllers/post.test-check.controllers';
import { routerHandler } from '@utils';

export const testsRouter = Router();

testsRouter.get('/test', routerHandler, getTestData);
testsRouter.post('/checkTest', routerHandler, checkTestAnswer);
