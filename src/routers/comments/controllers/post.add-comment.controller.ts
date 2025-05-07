import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { CommentsService } from '@services';
import { CommentSchema } from '@schemas';
import { ObjectId } from 'mongodb';

export const addComment = async (req: Request, res: Response) => {
  try {
    const comment: CommentSchema = req.body.comment as CommentSchema;

    if (!comment) {
      res.status(400).json({ message: 'no comment data provided' });
      return;
    }

    const comment_: Omit<CommentSchema, '_id' | 'createdAt' | 'updatedAt'> = {
      lessonHref: comment.lessonHref,
      parentCommentId: comment.parentCommentId,
      userId: new ObjectId('681a953afcb97f01b58517c0'), // TODO: change to id from user token

      text: comment.text,
      attachments: comment.attachments,
    };

    const newComment = await CommentsService.createNewComment(comment_);
    if (!newComment) {
      res.status(500).json({ message: 'failed to create comment' });
      return;
    }

    res.status(200).json({ comment: newComment });
    return;
  } catch (error) {
    errorHandler(res, error);
  }
};
