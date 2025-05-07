import { UserDTO, UserLoginDTO } from '@dto';
import { UserService } from '@services';
import { UserToken } from '@types';
import jwt, { SignOptions } from 'jsonwebtoken';
import { authConfig } from '@config';

export class AuthorizationService {
  public static async logInUser(
    params: { userCredentials: UserLoginDTO } | { token: string }
  ): Promise<{ user: UserDTO; token: UserToken } | null> {
    if ('token' in params) {
      const userToken = this.verifyUserToken(params.token);
      if (!userToken) {
        return null;
      }

      const user = await UserService.getUser({ _id: userToken.userId });
      if (!user) {
        return null;
      }
      const newToken = this.generateUserToken({
        userId: user._id.toString(),
        email: user.email,
      });

      return { user: user, token: newToken };
    } else {
      const user = await UserService.getUser({
        email: params.userCredentials.email,
      });

      if (user && user.password === params.userCredentials.password) {
        const token = this.generateUserToken({
          userId: user._id.toString(),
          email: user.email,
        });
        return { user: user, token: token };
      } else {
        return null;
      }
    }
  }

  public static generateUserToken(params: {
    userId: string;
    email: string;
  }): string {
    const payload: jwt.JwtPayload = {
      userId: params.userId,
      email: params.email,
      role: 'user',
    };

    const signature = authConfig.userSecret as jwt.Secret;

    const options: SignOptions = {
      algorithm: authConfig.userAlgorithm as jwt.Algorithm,
      expiresIn: authConfig.userExpiration as jwt.SignOptions['expiresIn'],
      issuer: authConfig.userIssuer,
    };

    return jwt.sign(payload, signature, options);
  }

  public static verifyUserToken(token: string): jwt.JwtPayload | null {
    const signature = authConfig.userSecret as jwt.Secret;

    const options: SignOptions = {
      algorithm: authConfig.userAlgorithm as jwt.Algorithm,
      issuer: authConfig.userIssuer,
    };
    try {
      return jwt.verify(token, signature, options) as jwt.JwtPayload;
    } catch (error) {
      return null;
    }
  }
}
