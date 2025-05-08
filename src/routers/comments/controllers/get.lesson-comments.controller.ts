import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { CommentsService } from '@services';
import { CommentSchema } from '@schemas';
import { CommentDTO } from '@dto';
import { CommentMapper } from '@mappers';

export const getLessonComments = async (req: Request, res: Response) => {
  try {
    const lessonHref: string = req.query['lessonhref'] as string;

    if (!lessonHref || lessonHref.trim() === '') {
      res.status(400).json({ message: 'lesson href is required' });
      return;
    }

    const comments: CommentSchema[] | null =
      await CommentsService.getCommentsOfLesson(lessonHref);

    const comments_: CommentDTO[] = comments.map((comment: CommentSchema) => {
      return CommentMapper.toDTO(comment);
    });

    res.status(200).json({ comments: comments_ });
    return;
  } catch (error) {
    errorHandler(res, error);
  }
};
