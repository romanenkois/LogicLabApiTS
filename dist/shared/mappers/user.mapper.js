"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
class UserMapper {
    static schemaToDTO(user) {
        return {
            id: user._id,
            userInfo: {
                name: user.userInfo.name,
                profilePicture: user.userInfo.profilePicture,
            },
        };
    }
    static schemaToPrivateDTO(user) {
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
exports.UserMapper = UserMapper;
