import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { CourseService } from '@services';
import { Course, LessonSimple } from '@types';

export const getCourse = async (req: Request, res: Response) => {
  try {
    const courseHref = req.query['href'] as string;
    const getLessons: boolean = req.query.getlessons === 'true';

    if (!courseHref || courseHref.trim() === '') {
      res.status(400).json({ message: 'Course name is required' });
      return;
    }

    const course: Course | null = await CourseService.getCourse(courseHref);
    const lessons: LessonSimple[] | null =
      course && course.lessons && getLessons
        ? await CourseService.getLessons(course.lessons.map(lesson => lesson.href))
        : null;

    if (course) {
      res.status(200).json({
        course: course,
        ...(getLessons ? { lessons: lessons } : {})
      });
      return;
    } else {
      res.status(404).json({ error: 'Course not found' });
      return;
    }
  } catch (error) {
    errorHandler(res, error);
  }
};
