import { Request, Response, NextFunction } from 'express';
import { appConfig } from '@config';

/**
 * Middleware function, to limit the size of the request headers
 */
export const headerSizeLimiter = () =>
  (req: Request, res: Response, next: NextFunction): void => {
    const headerSize = Buffer.byteLength(JSON.stringify(req.headers));

    if (headerSize > appConfig.other.headerSizeLimit) {
      res.status(431).json({
        error: 'Request header size too large',
      });
      return;
    }

    next();
  };

