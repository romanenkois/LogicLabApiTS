import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { AuthorizationService, UserService } from '@services';
import { ObjectId } from 'mongodb';
import { UserMapper } from '@mappers';
import { UserSchema } from '@schemas';

export const getUser = async (req: Request, res: Response) => {
  try {
    const id = req.query['userid'] as string;
    console.log('id', id);
    if (!id || id.trim() === '') {
      res.status(400).json({ message: 'User ID is required' });
      return;
    }

    const user: UserSchema | null = await UserService.getUser({
      _id: new ObjectId(id),
    });

    if (user) {
      res.status(200).json({ user: UserMapper.schemaToPrivateDTO(user) });
      return;
    } else {
      res.status(404).json({ message: 'User not found' });
      return;
    }
  } catch (error) {
    errorHandler(res, error);
  }
};
