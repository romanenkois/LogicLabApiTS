import { Request, Response } from 'express';
import { errorHadler } from '@utils';
import { CourseService } from '@services';

export const getListOfCourses = async (req: Request, res: Response) => {
  try {
    const courses = {};
    CourseService.getCoursesList();

    res.status(200).json(courses);
  } catch (error) {
    errorHadler(res, error);
  }
};
