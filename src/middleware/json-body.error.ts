import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const jsonErrorHandler: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof SyntaxError && 'body' in error) {
    res.status(400).json({
      message: 'Invalid JSON format',
    });
    return;
  }
  next(error);
};
