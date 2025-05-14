import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { AuthorizationService } from '@services';

export const verifyAccessToken = async (req: Request, res: Response) => {
  try {
    let token = req.headers.authorization as string;
    token = token.split(' ')[1];

    if (!token) {
      res.status(400).json({
        message: 'Token is required',
      });
      return;
    }

    const response = AuthorizationService.verifyUserAccessToken(token);
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
