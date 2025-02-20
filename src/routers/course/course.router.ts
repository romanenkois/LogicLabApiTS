import { Router } from 'express';
import { getListOfCourses } from './controllers/get.all-courses-list.controller';
import { getCourse } from './controllers/get.course.controller';
import { getLesson } from './controllers/get.lesson.controller';
import { getCourseLessons } from './controllers/get.course-lessons.controller';
import { routerHandler } from '@utils';

export const coursesRouter = Router();

coursesRouter.get('/courses-list', routerHandler, getListOfCourses);
coursesRouter.get('/course', routerHandler, getCourse);
coursesRouter.get('/course-lessons', routerHandler, getCourseLessons);
coursesRouter.get('/lesson', routerHandler, getLesson);
