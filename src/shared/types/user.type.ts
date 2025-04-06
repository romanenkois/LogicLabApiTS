import { UserSchema } from '@schemas';

export type User = {
  _id: UserSchema['_id'];
  email: UserSchema['email'];
  password: UserSchema['password'];

  isBanned: UserSchema['isBanned'];

  userInfo: {
    name: UserSchema['userInfo']['name'];
    profilePicture?: UserSchema['userInfo']['profilePicture'];
  }

  createdAt: UserSchema['createdAt'];
  updatedAt: UserSchema['updatedAt'];
};
