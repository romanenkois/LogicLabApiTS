"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourse = void 0;
const _utils_1 = require("../../../shared/utils/index.js");
const _services_1 = require("../../../services/index.js");
const _mappers_1 = require("../../../shared/mappers/index.js");
const getCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseHref = req.query['href'];
        const getLessons = req.query['getlessons'] === 'true';
        if (!courseHref || courseHref.trim() === '') {
            res.status(400).json({ message: 'Course name is required' });
            return;
        }
        const course = yield _services_1.CourseService.getCourse(courseHref);
        const lessons = course && course.lessons && getLessons
            ? yield _services_1.CourseService.getSimpleLessons(course.lessons.map((lesson) => lesson.href))
            : null;
        if (course && getLessons) {
            res.status(200).json({
                course: _mappers_1.CourseMapper.typeToDTO(course),
                lessons: lessons
                    ? lessons.map((lesson) => _mappers_1.LessonMapper.typeSimpleToSimpleDTO(lesson))
                    : {},
            });
            return;
        }
        else if (course) {
            res.status(200).json({
                course: _mappers_1.CourseMapper.typeToDTO(course),
            });
            return;
        }
        else {
            res.status(404).json({ error: 'Course not found' });
            return;
        }
    }
    catch (error) {
        (0, _utils_1.errorHandler)(res, error);
    }
});
exports.getCourse = getCourse;
