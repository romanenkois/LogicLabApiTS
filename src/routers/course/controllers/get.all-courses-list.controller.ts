import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { CourseService } from '@services';

export const getListOfCourses = async (req: Request, res: Response) => {
  try {
    const courses = {};
    CourseService.getCoursesList();

    res.status(200).json(courses);
  } catch (error) {
    errorHandler(res, error);
  }
};
