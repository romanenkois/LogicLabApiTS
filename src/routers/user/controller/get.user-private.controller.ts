import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { AuthorizationService, UserService } from '@services';
import { ObjectId } from 'mongodb';
import { UserMapper } from '@mappers';

export const getUserPrivate = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    if (!token) {
      res.status(401).json({ message: 'Authorization token is required' });
      return;
    }
    const token_ = AuthorizationService.verifyUserAccessToken(token);
    if (!token_ || !token_.userId) {
      res.status(401).json({ message: 'Invalid token' });
      return;
    }

    const user = await UserService.getUser({ _id: new ObjectId(token_?.userId) });

    if (user) {
      res.status(200).json({ user: UserMapper.schemaToDTO(user) });
      return;
    } else {
      res.status(404).json({ message: 'User not found' });
      return;
    }
  } catch (error) {
    errorHandler(res, error);
  }
};
