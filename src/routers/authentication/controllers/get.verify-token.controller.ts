import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { AuthorizationService } from '@services';

export const verifyToken = async (req: Request, res: Response) => {
  try {
    const token = req.query.token as string;
    if (!token) {
      res.status(400).json({
        message: 'Token is required',
      });
      return;
    }

    const response = AuthorizationService.verifyUserToken(token);
    if (!response) {
      res.status(401).json({
        message: 'Invalid token',
      });
      return;
    }
    res.status(200).json({
      message: 'Token is valid'
    });
    return;
  } catch (error) {
    errorHandler(res, error);
  }
};
