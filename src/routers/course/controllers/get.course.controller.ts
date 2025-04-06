import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { CourseService } from '@services';
import { Course, LessonSimple } from '@types';
import { CourseMapper, LessonMapper } from '@mappers';

export const getCourse = async (req: Request, res: Response) => {
  try {
    const courseHref = req.query['href'] as string;
    const getLessons: boolean = req.query['getlessons'] === 'true';

    if (!courseHref || courseHref.trim() === '') {
      res.status(400).json({ message: 'Course name is required' });
      return;
    }

    const course: Course | null = await CourseService.getCourse(courseHref);
    const lessons: LessonSimple[] | null =
      course && course.lessons && getLessons
        ? await CourseService.getSimpleLessons(
            course.lessons.map((lesson) => lesson.href)
          )
        : null;

    if (course && getLessons) {
      res.status(200).json({
        course: CourseMapper.typeToDTO(course),
        lessons: lessons
          ? lessons.map((lesson) => LessonMapper.typeSimpleToSimpleDTO(lesson))
          : {},
      });
      return;
    } else if (course) {
      res.status(200).json({
        course: CourseMapper.typeToDTO(course),
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
