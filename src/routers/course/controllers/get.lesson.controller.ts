import { Request, Response } from 'express';
import { errorHadler } from '@utils';

export const getLesson = async (req: Request, res: Response) => {
  try {
    const courseName = req.params['courseHref'];
    const lessonName = req.params['lessonHref'];

    if (!courseName) {
      res.status(400).json({ message: 'Course name is required' });
    }

    let lesson_data;

    switch (courseName) {
      case 'javascript':
        lesson_data = {};
        break;
      default:
        res.status(404).json({ message: 'Course with that name hasnt been found' });
        return;
    }

    if (!lesson_data) {
      res.status(404).json({ message: 'Lesson with that name hasnt been found' });
    }

    res.status(200).json({ lesson: lesson_data });
  } catch (error) {
    errorHadler(res, error);
  }
};
