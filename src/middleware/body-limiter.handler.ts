import { Request, Response } from 'express';
import { json } from 'express';
import { appConfig } from '@config';

/**
 * Middleware function, to limit data size of request body
 */
export const bodySizeLimiter = (req: Request, res: Response, next: Function) => {
  json({
    limit: `${appConfig.bodySizeLimit}b`
  })(req, res, (err) => {
    if (err) {
      if (err.type === 'entity.too.large') {
        res.status(413).json({ message: 'The request payload is too large' });
        return;
      } else {
        next(err);
      }
    }
    next();
  });
}; 