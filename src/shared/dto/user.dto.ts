import { User } from "@types";

export type UserDTO = {
  email: User['email'];


  userInfo: {
    name: User['userInfo']['name'];
    profilePicture?: User['userInfo']['profilePicture'];
  }
}

export type UserRegistrationDTO = {
  email: User['email'];
  password: User['password'];

  userInfo: {
    name: User['userInfo']['name'];
    profilePicture?: User['userInfo']['profilePicture'];
  }
}

export type UserLoginDTO = {
  email: User['email'];
  password: User['password'];
}


