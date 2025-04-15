import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { AuthorizationService, UserService } from '@services';
import { UserLoginDTO } from '@dto';

export const passwordLoginUser = async (req: Request, res: Response) => {
  try {
    const userLogin: UserLoginDTO = req.body['login'];
    if (!userLogin || Object.keys(userLogin).length === 0) {
      res.status(400).json({ message: 'User login data is required' });
      return;
    }

    const result = await AuthorizationService.logInUser({
      userCredentials: userLogin,
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
