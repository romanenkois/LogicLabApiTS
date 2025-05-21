import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { AuthorizationService } from '@services';
import { UserMapper } from '@mappers';

export const refreshTokens = async (req: Request, res: Response) => {
  try {
    let token = req.query['token'] as string;

    if (!token || token.trim() === '') {
      res.status(400).json({
        message: 'Token is required',
      });
      return;
    }
    const token_ = AuthorizationService.verifyUserRefreshToken(token);
    if (!token_ || !token_.userId || !token_.email) {
      res.status(403).json({ message: 'Invalid token' });
      return;
    }
    const newRefreshToken = AuthorizationService.generateUserRefreshToken({
      userId: token_.userId,
      email: token_.email,
    });
    const newAccessToken = AuthorizationService.generateUserAccessToken({
      userId: token_.userId,
      email: token_.email,
    });

    if (newAccessToken && newRefreshToken) {
      res.status(201).json({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
      return;
    } else {
      // we mask if user exists or not
      res.status(404).json({ message: 'Failed to refresh' });
      return;
    }
  } catch (error) {
    errorHandler(res, error);
  }
};
