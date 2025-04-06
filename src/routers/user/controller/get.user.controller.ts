
import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { UserService } from '@services';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const id = req.body['id'];
    const email = req.body['email'];

    const user = await UserService.getUser({ _id: id, email: email });

    if (user) {
      res.status(200).json({ user: user });
      return;
    } else {
      res.status(404).json({ message: 'User not found' });
      return;
    }
  } catch (error) {
    errorHandler(res, error);
  }
};
