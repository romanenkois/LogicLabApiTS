import { Logger } from '@logger';
import { Request, Response } from 'express';

/**
 * Middleware function to log every request
 * @param req - The request object
 * @param res - The response object
 * @param next - The next middleware function
 */
export const routerHandler = (req: Request, res: Response, next: Function) => {
  Logger.logRequest({
    method: req.method,
    url: req.url,
    headers: Object.fromEntries(
      Object.entries(req.headers).map(([k, v]) => [k, String(v)])
    ),
    body: req.body,
  })
  next();
};
