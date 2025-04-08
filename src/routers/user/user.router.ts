import { Router } from 'express';
import { getUser } from './controller/get.user.controller';

export const userRouter = Router();

userRouter.get('/user', getUser);
