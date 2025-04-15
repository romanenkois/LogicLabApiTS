import { Router } from 'express';
import { registerUser } from './controllers/put.register.controller';
import { passwordLoginUser } from './controllers/post.password-login.controller';
import { tokenLoginUser } from './controllers/post.token-login.controller';

export const authorizationRouter = Router();

authorizationRouter.put('/register', registerUser);
authorizationRouter.post('/login', passwordLoginUser);
authorizationRouter.post('/token', tokenLoginUser);
