import { MongoDB } from '@database';
import { UserDTO, UserLoginDTO } from '@dto';
import { UserService } from '@services';
import { UserToken } from '@types';
import jwt, { SignOptions } from 'jsonwebtoken';
import { authConfig } from '@config';


export class AuthorizationService {
  public static async logInUser(userCredentials: UserLoginDTO): Promise<{user: UserDTO, token: UserToken} | null> {
    const collectionName = 'users';
    const db = await MongoDB.getDB();

    const user = await UserService.getUser({email: userCredentials.email});
    const token = 'token'; // TODO

    if (user && user.password === userCredentials.password) {
      return {user: user, token: token};
    } else {
      return null;
    }
  }

  public static generateUserToken(params: { userId: string }) {
    const payload: jwt.JwtPayload = {
      userId: params.userId,
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
    }
    catch (error) {
      return null;
    }
  }
}
