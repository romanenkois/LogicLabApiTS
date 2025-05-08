import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { AuthorizationService, CommentsService } from '@services';
import { CommentSchema } from '@schemas';
import { ObjectId } from 'mongodb';
import { CommentMapper } from '@mappers';

export const addComment = async (req: Request, res: Response) => {
  try {
    const comment: CommentSchema = req.body.comment as CommentSchema;

    if (!comment) {
      res.status(400).json({ message: 'no comment data provided' });
      return;
    }

    const token = req.headers['authorization'] as string;
    if (!token) {
      res.status(401).json({ message: 'no token provided' });
      return;
    }
    const token_ = AuthorizationService.verifyUserToken(token);
    if (!token_ || !token_.userId) {
      res.status(401).json({ message: 'invalid token' });
      return;
    }

    const comment_: Omit<CommentSchema, '_id' | 'createdAt' | 'updatedAt'> = {
      lessonHref: comment.lessonHref,
      parentCommentId: comment.parentCommentId,
      userId: token_.userId,

      text: comment.text,
      attachments: comment.attachments,
    };

    const newComment = await CommentsService.createNewComment(comment_);
    if (!newComment) {
      res.status(500).json({ message: 'failed to create comment' });
      return;
    }

    res.status(200).json({ comment: CommentMapper.toDTO(newComment) });
    return;
  } catch (error) {
    errorHandler(res, error);
  }
};
