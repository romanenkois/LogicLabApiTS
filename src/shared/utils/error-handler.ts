import { Response } from 'express';

export const errorHadler = (res: Response, error: any) => {
  console.error('Error:', error);
  res.status(500).json({ error: 'Internal error' });
};
