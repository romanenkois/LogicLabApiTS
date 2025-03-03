import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { CourseService } from '@services';
import { Course } from '@types';

export const getCourse = async (req: Request, res: Response) => {
  try {
    const courseName = req.query['course'] as string;
    
    if (!courseName || courseName.trim() === '') {
      res.status(400).json({ message: 'Course name is required' });
      return;
    }

    const course: Course | null = await CourseService.getCourse(courseName);

    if (course) {
      res.status(200).json({ course: course });
      return;
    } else {
      res.status(404).json({ error: 'Course not found' });
      return;
    }
  } catch (error) {
    errorHandler(res, error);
  }
};
