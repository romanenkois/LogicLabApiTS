import { Request, Response } from 'express';
import { errorHadler } from '@utils';
import { CourseService } from '@services';

export const getLesson = async (req: Request, res: Response) => {
  try {
    const courseName = req.params['courseHref'];
    const lessonName = req.params['lessonHref'];

    if (!courseName) {
      res.status(400).json({ message: 'Course name is required' });
    }
    if (!lessonName) {
      res.status(400).json({ message: 'Lesson name is required' });
    }

    const lesson = await CourseService.getLesson(courseName, lessonName);

    if (lesson) {
      res.status(200).json({ lesson: lesson });
    } else {
      res.status(404).json({ error: 'Lesson not found' });
    }
  } catch (error) {
    errorHadler(res, error);
  }
};
