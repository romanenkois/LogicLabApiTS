import { Router } from 'express';
import { getTestData } from './controllers/get.test-data.controller';
import { checkTestAnswer } from './controllers/post.test-check.controllers';

export const testsRouter = Router();

testsRouter.get('/test', getTestData);
testsRouter.post('/checkTest', checkTestAnswer);
