import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { CourseService } from '@services';
import { Course } from '@types';
import { CourseMapper } from '@mappers';

export const addCourse = async (req: Request, res: Response) => {
  try {
    const course: Course = req.body['course'] as Course;

    if (!course || Object.keys(course).length === 0) {
      res.status(400).json({ message: 'Course data is required' });
      return;
    }

    const course_ = await CourseService.addCourse(course);

    if (course_) {
      res.status(201).json({ course: CourseMapper.typeToDTO(course_) });
      return;
    } else {
      res.status(400).json({ message: 'Failed to add course' });
      return;
    }
  } catch (error) {
    errorHandler(res, error);
  }
};
