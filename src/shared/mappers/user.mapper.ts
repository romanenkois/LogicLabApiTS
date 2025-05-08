import { UserDTO, UserPrivateDTO } from '@dto';
import { UserSchema } from '@schemas';

export class UserMapper {
  public static schemaToDTO(user: UserSchema): UserDTO {
    return {
      id: user._id,
      userInfo: {
        name: user.userInfo.name,
        profilePicture: user.userInfo.profilePicture,
      },
    };
  }

  public static schemaToPrivateDTO(user: UserSchema): UserPrivateDTO {
    return {
      id: user._id,
      email: user.email,
      userInfo: {
        name: user.userInfo.name,
        profilePicture: user.userInfo.profilePicture,
      },
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
