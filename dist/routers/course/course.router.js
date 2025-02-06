"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursesRouter = void 0;
const express_1 = require("express");
const _config_1 = require("../../shared/config/index.js");
const get_all_courses_list_controller_1 = require("./controllers/get.all-courses-list.controller");
const get_course_controller_1 = require("./controllers/get.course.controller");
const get_lesson_controller_1 = require("./controllers/get.lesson.controller");
const get_course_lessons_controller_1 = require("./controllers/get.course-lessons.controller");
exports.coursesRouter = (0, express_1.Router)();
exports.coursesRouter.get('/courses-list', (req, res, next) => {
    if (_config_1.appConfig.logging.console.onRequset) {
        console.log('GET /courses-list');
    }
    next();
}, get_all_courses_list_controller_1.getListOfCourses);
exports.coursesRouter.get('/course', (req, res, next) => {
    if (_config_1.appConfig.logging.console.onRequset) {
        console.log('GET /course');
    }
    next();
}, get_course_controller_1.getCourse);
exports.coursesRouter.get('/course-lessons', (req, res, next) => {
    if (_config_1.appConfig.logging.console.onRequset) {
        console.log('GET /course-lessons');
    }
    next();
}, get_course_lessons_controller_1.getCourseLessons);
exports.coursesRouter.get('/lesson', (req, res, next) => {
    if (_config_1.appConfig.logging.console.onRequset) {
        console.log('GET /lesson');
    }
    next();
}, get_lesson_controller_1.getLesson);
