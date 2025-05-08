import { CommentSchema } from '@schemas';
import { CommentDTO } from '@dto';

export class CommentMapper {
  static toDTO(comment: CommentSchema): CommentDTO {
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
