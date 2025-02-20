import { Request, Response } from 'express';

export const routerHandler = (req: Request, res: Response, next: Function) => {
  console.log('Request:', req.method, req.url);
  next();
};
