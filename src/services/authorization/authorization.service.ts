import { MongoDB } from '@database';

export class AuthorizationService {
  static async registerUser(user: {
    email: string;
    password: string;
  }): Promise<boolean> {
    const collectionName = 'users';
    const db = await MongoDB.getDB();
    const _user = user


    return false;
  }
}
