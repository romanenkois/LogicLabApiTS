import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { CourseService } from '@services';

export const getCourse = async (req: Request, res: Response) => {
  try {
    const courseName = req.query['course'] as string;

    if (!courseName) {
      res.status(400).json({ message: 'Course name is required' });
      return;
    }

    const course = await CourseService.getCourse(courseName);

    if (course) {
      res.status(200).json({course: course});
    } else {
      res.status(404).json({error: 'Course not found' });
    }


  } catch (error) {
    errorHandler(res, error);
  }
};
