import { Router } from 'express';
import { getListOfCourses } from './controllers/get.all-courses-list.controller';
import { getCourse } from './controllers/get.course.controller';
import { getLesson } from './controllers/get.lesson.controller';
import { getCourseLessons } from './controllers/get.course-lessons.controller';

export const coursesRouter = Router();

coursesRouter.get('/courses-list', getListOfCourses);
coursesRouter.get('/course', getCourse);
coursesRouter.get('/course-lessons', getCourseLessons);
coursesRouter.get('/lesson', getLesson);
