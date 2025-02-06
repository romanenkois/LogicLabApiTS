import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { CourseService } from '@services';
import { LessonSimple } from '@types';

export const getCourseLessons = async (req: Request, res: Response) => {
  try {
    const courseHref: string = req.query['course'] as string;

    if (!courseHref || courseHref.trim() === '') {
      res.status(400).json({ error: 'courseHref is required' });
      return;
    }

    const courseLessons: LessonSimple[] = await CourseService.getCourseLessons(courseHref);

    res.status(200).json({lessons: courseLessons});
    return;
  } catch (error) {
    errorHandler(res, error);
  }
};
