import { Request, Response } from 'express';
import { errorHandler } from '@utils';

export const checkTestAnswer = async (req: Request, res: Response) => {
  try {
    let isRight = false;
    const answer = req.body.answer;

    res.status(200).json({isRight: isRight});
    return;
  } catch (error) {
    errorHandler(res, error);
  }
}
