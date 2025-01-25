import { Router } from 'express';
import { appConfig } from '@config';
import { getListOfCourses } from './controllers/get.all-courses-list.controller';
import { getCourse } from './controllers/get.course.controller';
import { getLesson } from './controllers/get.lesson.controller';

export const coursesRouter = Router();

coursesRouter.get('/all-courses-list',
  (req, res, next) => {
    if (appConfig.logging.console.onRequset) {
      console.log('GET /v2/courses/all-courses-list');
    }
    next();
  },
  getListOfCourses
);

coursesRouter.get('/:courseHref',
  (req, res, next) => {
    if (appConfig.logging.console.onRequset) {
      console.log('GET /v2/courses/:courseHref');
    }
    next();
  },
  getCourse
);

coursesRouter.get('/:courseHref/:lessonHref',
  (req, res, next) => {
    if (appConfig.logging.console.onRequset) {
      console.log('GET /v2/courses/:courseHref/:lessonHref');
    }
    next();
  },
  getLesson
);
