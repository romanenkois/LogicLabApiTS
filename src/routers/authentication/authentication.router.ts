import { Router } from 'express';
import { registerUser } from './controllers/put.register.controller';

export const authorizationRouter = Router();

authorizationRouter.put('/register', registerUser);
// authorizationRouter.post('/login');
