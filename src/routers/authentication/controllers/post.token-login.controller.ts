import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { AuthorizationService } from '@services';
import { UserMapper } from '@mappers';

export const tokenLoginUser = async (req: Request, res: Response) => {
  try {
    let token = req.headers.authorization as string;
    token = token.split(' ')[1];

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
      const { user, accessToken, refreshToken } = result;
      res
        .status(201)
        .json({
          user: UserMapper.schemaToPrivateDTO(user),
          accessToken: accessToken,
          refreshToken: refreshToken,
        });
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
