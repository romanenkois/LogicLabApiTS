import { Router } from 'express';
import { registerUser } from './controllers/put.register.controller';
import { passwordLoginUser } from './controllers/post.password-login.controller';
import { tokenLoginUser } from './controllers/post.token-login.controller';
import { verifyAccessToken } from './controllers/get.verify-token.controller';
import { refreshTokens } from './controllers/get.refresh-tokens.controller';

export const authorizationRouter = Router();

authorizationRouter.get('/refresh', refreshTokens)
authorizationRouter.get('/verify', verifyAccessToken)
authorizationRouter.put('/register', registerUser);
authorizationRouter.post('/login', passwordLoginUser);
authorizationRouter.post('/token', tokenLoginUser);
