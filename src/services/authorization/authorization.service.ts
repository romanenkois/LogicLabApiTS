import { UserLoginDTO } from '@dto';
import { UserService } from '@services';
import { UserToken } from '@types';
import jwt, { SignOptions } from 'jsonwebtoken';
import { authConfig } from '@config';
import bcrypt from 'bcrypt';
import { UserSchema } from '@schemas';

export class AuthorizationService {
  public static async logInUser(
    params: { userCredentials: UserLoginDTO } | { token: string }
  ): Promise<{
    user: UserSchema;
    accessToken: UserToken;
    refreshToken: UserToken;
  } | null> {
    if ('token' in params) {
      const userToken = this.verifyUserAccessToken(params.token);
      if (!userToken) {
        return null;
      }

      const user: UserSchema | null = await UserService.getUser({
        _id: userToken.userId,
      });
      if (!user) {
        return null;
      }
      const newAccessToken = this.generateUserAccessToken({
        userId: user._id.toString(),
        email: user.email,
      });

      const newRefreshToken = this.generateUserRefreshToken({
        userId: user._id.toString(),
        email: user.email,
      });

      return {
        user: user,
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      };
    } else {
      const user = await UserService.getUser({
        email: params.userCredentials.email,
      });

      if (user) {
        const passwordMatch = await bcrypt.compare(
          params.userCredentials.password,
          user.password
        );
        if (passwordMatch) {
          const newAccessToken = this.generateUserAccessToken({
            userId: user._id.toString(),
            email: user.email,
          });
          const newRefreshToken = this.generateUserRefreshToken({
            userId: user._id.toString(),
            email: user.email,
          });

          return {
            user: user,
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
          };
        }
      }
      return null;
    }
  }

  public static generateUserRefreshToken(params: {
    userId: string;
    email: string;
  }): string {
    const payload: jwt.JwtPayload = {
      userId: params.userId,
      email: params.email,
      role: 'user',
    };

    const signature = authConfig.user.refresh.secret as jwt.Secret;

    const options: SignOptions = {
      algorithm: authConfig.user.refresh.algorithm as jwt.Algorithm,
      expiresIn: authConfig.user.refresh
        .expiration as jwt.SignOptions['expiresIn'],
      issuer: authConfig.user.refresh.issuer,
    };

    return jwt.sign(payload, signature, options);
  }

  public static generateUserAccessToken(params: {
    userId: string;
    email: string;
  }): string {
    const payload: jwt.JwtPayload = {
      userId: params.userId,
      email: params.email,
      role: 'user',
    };

    const signature = authConfig.user.access.secret as jwt.Secret;

    const options: SignOptions = {
      algorithm: authConfig.user.access.algorithm as jwt.Algorithm,
      expiresIn: authConfig.user.access
        .expiration as jwt.SignOptions['expiresIn'],
      issuer: authConfig.user.access.issuer,
    };

    return jwt.sign(payload, signature, options);
  }

  public static verifyUserAccessToken(token: string): jwt.JwtPayload | null {
    const signature = authConfig.user.access.secret as jwt.Secret;

    const options: SignOptions = {
      algorithm: authConfig.user.access.algorithm as jwt.Algorithm,
      issuer: authConfig.user.access.issuer,
    };
    try {
      return jwt.verify(token, signature, options) as jwt.JwtPayload;
    } catch (error) {
      return null;
    }
  }

  public static verifyUserRefreshToken(token: string): jwt.JwtPayload | null {
    const signature = authConfig.user.refresh.secret as jwt.Secret;

    const options: SignOptions = {
      algorithm: authConfig.user.refresh.algorithm as jwt.Algorithm,
      issuer: authConfig.user.refresh.issuer,
    };
    try {
      return jwt.verify(token, signature, options) as jwt.JwtPayload;
    } catch (error) {
      return null;
    }
  }
}
