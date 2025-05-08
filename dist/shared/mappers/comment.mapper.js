"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentMapper = void 0;
class CommentMapper {
    static toDTO(comment) {
        return {
            id: comment._id,
            lessonHref: comment.lessonHref,
            parentCommentId: comment.parentCommentId,
            userId: comment.userId,
            text: comment.text,
            attachments: comment.attachments,
            createdAt: comment.createdAt,
            updatedAt: comment.updatedAt,
        };
    }
}
exports.CommentMapper = CommentMapper;
