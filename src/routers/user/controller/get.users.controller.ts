import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { UserService } from '@services';
import { ObjectId } from 'mongodb';
import { UserMapper } from '@mappers';
import { UserSchema } from '@schemas';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const ids = req.query['userids'] as string;
    if (!ids || ids.trim() === '') {
      res.status(400).json({ message: 'User IDs are required' });
      return;
    }

    const ids_: ObjectId[] = ids
      .split(',')
      .map((id) => new ObjectId(id.trim()));

    const users: UserSchema[] = await UserService.getUsers(ids_);

    if (users && users.length > 0) {
      const users_ = users.map((user) => UserMapper.schemaToDTO(user));
      res.status(200).json({ users: users_ });
      return;
    } else {
      res.status(404).json({ message: 'User not found' });
      return;
    }
  } catch (error) {
    errorHandler(res, error);
  }
};
