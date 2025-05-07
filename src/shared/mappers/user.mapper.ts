import { UserDTO } from '@dto';
import { UserSchema } from '@schemas';
import { User } from '@types';

export class UserMapper {
  public static schemaToType(userSchema: UserSchema): User {
    return {
      _id: userSchema._id,
      email: userSchema.email,
      password: userSchema.password,
      isBanned: userSchema.isBanned,
      userInfo: {
        name: userSchema.userInfo.name,
        ...(userSchema.userInfo.profilePicture && {
          profilePicture: userSchema.userInfo.profilePicture,
        }),
      },
      createdAt: userSchema.createdAt,
      updatedAt: userSchema.updatedAt,
    };
  }

  public static typeToSchema(user: User): UserSchema {
    return {
      _id: user._id,
      email: user.email,
      password: user.password,
      isBanned: user.isBanned,
      userInfo: {
        name: user.userInfo.name,
        profilePicture: user.userInfo.profilePicture,
      },
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      lastLogin: new Date(),
    };
  }

  public static typeToDTO(user: User): UserDTO {
    return {
      email: user.email,
      userInfo: {
        name: user.userInfo.name,
        profilePicture: user.userInfo.profilePicture,
      },
    };
  }
  public static schemaToDTO(user: UserSchema): UserDTO {
    return {
      email: user.email,
      userInfo: {
        name: user.userInfo.name,
        profilePicture: user.userInfo.profilePicture,
      },
    };
  }
}
