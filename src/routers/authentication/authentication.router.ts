import { Router } from 'express';
import { registerUser } from './controllers/put.register.controller';
import { loginUser } from './controllers/post.login.controller';

export const authorizationRouter = Router();

authorizationRouter.put('/register', registerUser);
authorizationRouter.post('/login', loginUser);
