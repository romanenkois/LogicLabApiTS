import { MongoDB } from '@database';
import { UserRegistrationDTO } from '@dto';
import { UserSchema } from '@schemas';
import bcrypt from 'bcrypt';

export class UserService {
  private static readonly SALT_ROUNDS = 10;

  static async registerUser(user: UserRegistrationDTO): Promise<UserSchema | null> {
    const collectionName = 'users';
    const db = await MongoDB.getDB();

    // Hash password
    const hashedPassword = await bcrypt.hash(user.password, this.SALT_ROUNDS);

    const _user: Omit<UserSchema, '_id'> = {
      email: user.email,
      password: hashedPassword, // Store hashed password
      isBanned: false,
      userInfo: {
        name: user.userInfo.name,
        profilePicture: user.userInfo.profilePicture
          ? user.userInfo.profilePicture
          : '',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      lastLogin: new Date(),
    };

    const hasTheSameEmail = await db
      .collection(collectionName)
      .findOne({ email: _user.email });

    if (hasTheSameEmail) {
      return null;
    }

    const response = await db.collection(collectionName).insertOne(_user);

    if (response.insertedId) {
      const user__ = await this.getUser({ email: _user.email });
      if (user__) {
        return user__;
      }
    }
    throw new Error('User registration failed');
  }

  static async getUser(
    param:
      | {
          email: UserSchema['email'];
        }
      | {
          _id: UserSchema['_id'];
        }
  ): Promise<UserSchema | null> {
    const collectionName = 'users';
    const db = await MongoDB.getDB();
    const query: { email?: UserSchema['email']; _id?: UserSchema['_id'] } = {};
    if ('email' in param) {
      query.email = param.email;
    } else if ('_id' in param) {
      query._id = param._id;
    } else {
      return null;
    }

    const response: UserSchema | null = await db
      .collection<UserSchema>(collectionName)
      .findOne(query);

    return response ? response : null;
  }

  // idk even why this exists, but let it be
  static async banUser(userId: UserSchema['_id']): Promise<UserSchema | null> {
    const collectionName = 'users';
    const db = await MongoDB.getDB();
    const userExists = await this.getUser({ _id: userId });

    if (!userExists) {
      throw new Error('User to ban not found');
    }

    const response = await db
      .collection(collectionName)
      .updateOne({ _id: userId }, { $set: { isBanned: true } });

    if (response.modifiedCount === 1) {
      const user = await this.getUser({ _id: userId });
      if (user) {
        return user;
      }
    }
    return null;
  }
}
