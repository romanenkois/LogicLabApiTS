import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { UserService } from '@services';
import { UserRegistrationDTO } from '@dto';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user: UserRegistrationDTO = req.body['user']

    if (!user || Object.keys(user).length === 0) {
      res.status(400).json({ message: 'User data is required' });
      return;
    }

    const user_ = await UserService.registerUser(user);

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
