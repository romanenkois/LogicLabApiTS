import { Response } from 'express';

export const errorHandler = (res: Response, error: any) => {
  console.error('Error:', error);
  res.status(500).json({ message: `Internal error\n ${error}` });
};
