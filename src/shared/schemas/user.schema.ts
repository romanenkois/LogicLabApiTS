import { ObjectId } from 'mongodb';

export interface UserSchema {
  _id: ObjectId;
  email: string;
  password: string;
  isBanned: boolean;

  userInfo: {
    name: string;
    profilePicture?: string;
  };

  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
}
