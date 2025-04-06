
import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { AuthorizationService } from '@services';

export const addCourse = async (req: Request, res: Response) => {
  try {
    const user: {email: string, password: string} = req.body['user']

    if (!user || Object.keys(user).length === 0) {
      res.status(400).json({ message: 'User data is required' });
      return;
    }

    const user_ = await AuthorizationService.registerUser(user);

    if (user_) {
      res.status(201).json({ message: 'User has successfully registered' });
      return;
    } else {
      res.status(400).json({ message: 'Failed to register' });
      return;
    }
  } catch (error) {
    errorHandler(res, error);
  }
};
