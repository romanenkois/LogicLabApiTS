import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { AuthorizationService } from '@services';

export const tokenLoginUser = async (req: Request, res: Response) => {
  try {
    const token = req.body['token'];
    if (!token) {
      res.status(400).json({
        message: 'Token is required',
      });
      return;
    }

    const result = await AuthorizationService.logInUser({
      token: token,
    });

    if (result) {
      const { user, token } = result;
      res.status(201).json({ user: user, token: token });
      return;
    } else {
      // we mask if user exists or not
      res.status(404).json({ message: 'Failed to login' });
      return;
    }
  } catch (error) {
    errorHandler(res, error);
  }
};
