import { Request, Response } from 'express';
import { errorHadler } from '@utils';

export const getCourse = async (req: Request, res: Response) => {
  try {
    const courseName = req.params['courseHref'];

    if (!courseName) {
      res.status(400).json({ message: 'Course name is required' });
      return;
    }

    let course_data;

    switch (courseName) {
      case 'javascript':
        course_data = {};
        break;
      default:
        res
          .status(404)
          .json({ error: 'Course with that name hasnt been found' });
        break;
    }

    res.status(200).json(course_data);
  } catch (error) {
    errorHadler(res, error);
  }
};
