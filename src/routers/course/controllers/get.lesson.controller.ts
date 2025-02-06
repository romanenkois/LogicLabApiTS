import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { CourseService } from '@services';
import { Lesson } from '@types';

export const getLesson = async (req: Request, res: Response) => {
  try {
    const courseName= req.query['course'] as string;
    const lessonName = req.query['lesson'] as string;

    if (!courseName || courseName.trim() === '') {
      res.status(400).json({ message: 'Course name is required' });
      return;
    }
    if (!lessonName || lessonName.trim() === '') {
      res.status(400).json({ message: 'Lesson name is required' });
      return;
    }

    const lesson: Lesson | null = await CourseService.getLesson(courseName, lessonName);

    if (lesson) {
      res.status(200).json({ lesson: lesson });
      return;
    } else {
      res.status(404).json({ error: 'Lesson not found' });
      return;
    }
  } catch (error) {
    errorHandler(res, error);
  }
};
