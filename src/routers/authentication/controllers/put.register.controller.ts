import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { AuthorizationService, UserService } from '@services';
import { UserRegistrationDTO } from '@dto';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const userRegistration: UserRegistrationDTO = req.body['user'];

    if (
      !userRegistration ||
      Object.keys(userRegistration).length === 0 ||
      !userRegistration.email ||
      !userRegistration.password ||
      !userRegistration.userInfo.name
    ) {
      res.status(400).json({ message: 'User data is required' });
      return;
    }

    const user_ = await UserService.registerUser(userRegistration);
    console.log('user_:', user_);
    if (!user_) {
      res.status(400).json({ message: 'Failed to register' });
      return;
    }
    const userLogin = await AuthorizationService.logInUser({
      userCredentials: {
        email: user_.email,
        password: user_.password,
      },
    })

    if (userLogin) {
      const { user, token } = userLogin;

      res.status(201).json({ message: 'User has successfully registered', user: user, token: token });
      return;
    } else {
      res.status(400).json({ message: 'Failed to register' });
      return;
    }
  } catch (error) {
    errorHandler(res, error);
  }
};
