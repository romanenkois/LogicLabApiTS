"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursesRouter = void 0;
const express_1 = require("express");
const _config_1 = require("../../shared/config/index.js");
const get_all_courses_list_controller_1 = require("./controllers/get.all-courses-list.controller");
const get_course_controller_1 = require("./controllers/get.course.controller");
const get_lesson_controller_1 = require("./controllers/get.lesson.controller");
exports.coursesRouter = (0, express_1.Router)();
exports.coursesRouter.get('/all-courses-list', (req, res, next) => {
    if (_config_1.appConfig.logging.console.onRequset) {
        console.log('GET /v2/courses/all-courses-list');
    }
    next();
}, get_all_courses_list_controller_1.getListOfCourses);
exports.coursesRouter.get('/:courseHref', (req, res, next) => {
    if (_config_1.appConfig.logging.console.onRequset) {
        console.log('GET /v2/courses/:courseHref');
    }
    next();
}, get_course_controller_1.getCourse);
exports.coursesRouter.get('/:courseHref/:lessonHref', (req, res, next) => {
    if (_config_1.appConfig.logging.console.onRequset) {
        console.log('GET /v2/courses/:courseHref/:lessonHref');
    }
    next();
}, get_lesson_controller_1.getLesson);
