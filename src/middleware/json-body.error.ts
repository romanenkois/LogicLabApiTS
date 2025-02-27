import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const jsonErrorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof SyntaxError && 'body' in err) {
    res.status(400).json({
      message: 'Invalid JSON format',
    });
    return;
  }
  next(err);
};
