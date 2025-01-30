import { Router } from 'express';
import { appConfig } from '@config';
import { getListOfCourses } from './controllers/get.all-courses-list.controller';
import { getCourse } from './controllers/get.course.controller';
import { getLesson } from './controllers/get.lesson.controller';

export const coursesRouter = Router();

coursesRouter.get('/courses-list',
  (req, res, next) => {
    if (appConfig.logging.console.onRequset) {
      console.log('GET /v2/courses/courses-list');
    }
    next();
  },
  getListOfCourses
);

coursesRouter.get('/course',
  (req, res, next) => {
    if (appConfig.logging.console.onRequset) {
      console.log('GET /v2/course');
    }
    next();
  },
  getCourse
);

coursesRouter.get('/lesson',
  (req, res, next) => {
    if (appConfig.logging.console.onRequset) {
      console.log('GET /v2/lesson');
    }
    next();
  },
  getLesson
);
