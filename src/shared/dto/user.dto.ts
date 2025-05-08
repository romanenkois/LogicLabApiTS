import { UserSchema } from "@schemas";

export type UserDTO = {

  id: UserSchema['_id'];
  userInfo: {
    name: UserSchema['userInfo']['name'];
    profilePicture?: UserSchema['userInfo']['profilePicture'];
  }
}

export type UserPrivateDTO = {
  id: UserSchema['_id'];
  email: UserSchema['email'];
  userInfo: {
    name: UserSchema['userInfo']['name'];
    profilePicture?: UserSchema['userInfo']['profilePicture'];
  }
  createdAt: UserSchema['createdAt'];
  updatedAt: UserSchema['updatedAt'];
}

export type UserRegistrationDTO = {
  email: UserSchema['email'];
  password: UserSchema['password'];

  userInfo: {
    name: UserSchema['userInfo']['name'];
    profilePicture?: UserSchema['userInfo']['profilePicture'];
  }
}

export type UserLoginDTO = {
  email: UserSchema['email'];
  password: UserSchema['password'];
}


