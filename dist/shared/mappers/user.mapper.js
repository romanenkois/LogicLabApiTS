"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
class UserMapper {
    static schemaToType(userSchema) {
        return {
            _id: userSchema._id,
            email: userSchema.email,
            password: userSchema.password,
            isBanned: userSchema.isBanned,
            userInfo: Object.assign({ name: userSchema.userInfo.name }, (userSchema.userInfo.profilePicture && {
                profilePicture: userSchema.userInfo.profilePicture,
            })),
            createdAt: userSchema.createdAt,
            updatedAt: userSchema.updatedAt,
        };
    }
    static typeToSchema(user) {
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
    static typeToDTO(user) {
        return {
            email: user.email,
            userInfo: {
                name: user.userInfo.name,
                profilePicture: user.userInfo.profilePicture,
            },
        };
    }
    static schemaToDTO(user) {
        return {
            email: user.email,
            userInfo: {
                name: user.userInfo.name,
                profilePicture: user.userInfo.profilePicture,
            },
        };
    }
}
exports.UserMapper = UserMapper;
