import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { CourseService } from '@services';
import { Lesson } from '@types';
import { LessonMapper } from '@mappers';

export const addLesson = async (req: Request, res: Response) => {
  try {
    const lesson: Lesson = req.body['lesson'] as Lesson;

    if (!lesson || Object.keys(lesson).length === 0) {
      res.status(400).json({ message: 'Lesson data is required' });
      return;
    }

    const lesson_ = await CourseService.addLesson(lesson);

    if (lesson_) {
      res.status(201).json({ lesson: LessonMapper.typeToDTO(lesson_) });
      return;
    } else {
      res.status(400).json({ message: 'Failed to add lesson' });
      return;
    }
  } catch (error) {
    errorHandler(res, error);
  }
};
