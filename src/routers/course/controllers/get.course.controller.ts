import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { CourseService } from '@services';

export const getCourse = async (req: Request, res: Response) => {
  try {
    const courseName = req.query['course'] as string;
    const getCourseLessons = req.query['getLessons'] as string; // should be 'true', false by default

    if (!courseName || courseName.trim() === '') {
      res.status(400).json({ message: 'Course name is required' });
      return;
    }

    const [course, courseLessons] = await Promise.all([
      CourseService.getCourse(courseName),
      getCourseLessons && getCourseLessons.trim().toLowerCase() === 'true'
        ? CourseService.getCourseLessons(courseName)
        : Promise.resolve([]),
    ]);

    if (course) {
      if (getCourseLessons && getCourseLessons.trim().toLowerCase() === 'true') {
        res.status(200).json({ course: course, lessons: courseLessons });
        return;
      }
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
