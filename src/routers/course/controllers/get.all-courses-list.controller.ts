import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { CourseService } from '@services';
import { CourseBasic } from '@types';

export const getListOfCourses = async (req: Request, res: Response) => {
  try {
    const courses: CourseBasic[] = await CourseService.getCoursesList();
    res.status(200).json({courses: courses});
    return;
  } catch (error) {
    errorHandler(res, error);
  }
};
