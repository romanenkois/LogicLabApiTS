import { MongoDB } from '@database';
import { UserDTO, UserLoginDTO } from '@dto';
import { UserService } from '@services';
import { UserToken } from '@types';

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
}
