import { Request, Response } from 'express';
import { errorHadler } from '@utils';

export const getListOfCourses = async (req: Request, res: Response) => {
  try {
    const courses = {};
    res.status(200).json(courses);
  } catch (error) {
    errorHadler(res, error);
  }
};
