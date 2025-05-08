import { Router } from 'express';
import { registerUser } from './controllers/put.register.controller';
import { passwordLoginUser } from './controllers/post.password-login.controller';
import { tokenLoginUser } from './controllers/post.token-login.controller';
import { verifyToken } from './controllers/get.verify-token.controller';

export const authorizationRouter = Router();

authorizationRouter.get('/verify', verifyToken)
authorizationRouter.put('/register', registerUser);
authorizationRouter.post('/login', passwordLoginUser);
authorizationRouter.post('/token', tokenLoginUser);
