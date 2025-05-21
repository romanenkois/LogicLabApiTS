import { Router } from 'express';
import { getUser } from './controller/get.user.controller';
import { getUserPrivate } from './controller/get.user-private.controller';
import { getUsers } from './controller/get.users.controller';

export const userRouter = Router();

userRouter.get('/user', getUser);
userRouter.get('/users', getUsers);
userRouter.get('/user-private', getUserPrivate);
