import { Router, Request, Response, NextFunction} from 'express';
import { appConfig } from '@config';
import { getListOfCourses } from './controllers/get.all-courses-list.controller';
import { getCourse } from './controllers/get.course.controller';
import { getLesson } from './controllers/get.lesson.controller';
import { getCourseLessons } from './controllers/get.course-lessons.controller';

export const coursesRouter = Router();

coursesRouter.get('/courses-list',
  (req: Request, res: Response, next) => {
    if (appConfig.logging.console.onRequset) {
      console.log('GET /courses-list');
    }
    next();
  },
  getListOfCourses
);

coursesRouter.get('/course',
  (req, res, next) => {
    if (appConfig.logging.console.onRequset) {
      console.log('GET /course');
    }
    next();
  },
  getCourse
);

coursesRouter.get('/course-lessons',
  (req, res, next) => {
    if (appConfig.logging.console.onRequset) {
      console.log('GET /course-lessons');
    }
    next();
  },
  getCourseLessons
);

coursesRouter.get('/lesson',
  (req, res, next) => {
    if (appConfig.logging.console.onRequset) {
      console.log('GET /lesson');
    }
    next();
  },
  getLesson
);
