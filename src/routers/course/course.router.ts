import { Router } from 'express';
import { getListOfCourses } from './controllers/get.courses-list.controller';
import { getCourse } from './controllers/get.course.controller';
import { getLesson } from './controllers/get.lesson.controller';
import { addCourse } from './controllers/put.course.controller';
import { addLesson } from './controllers/put.lesson.controller';

export const coursesRouter = Router();

coursesRouter.get('/courses-list', getListOfCourses);
coursesRouter.get('/course', getCourse);
coursesRouter.get('/lesson', getLesson);

coursesRouter.put('/course', addCourse);
coursesRouter.put('/lesson', addLesson);
