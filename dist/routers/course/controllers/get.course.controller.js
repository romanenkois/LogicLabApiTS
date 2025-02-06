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
const getCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseName = req.query['course'];
        const getCourseLessons = req.query['getLessons']; // should be 'true', false by default
        if (!courseName || courseName.trim() === '') {
            res.status(400).json({ message: 'Course name is required' });
            return;
        }
        const [course, courseLessons] = yield Promise.all([
            _services_1.CourseService.getCourse(courseName),
            getCourseLessons && getCourseLessons.trim().toLowerCase() === 'true'
                ? _services_1.CourseService.getCourseLessons(courseName)
                : Promise.resolve([]),
        ]);
        if (course) {
            if (getCourseLessons && getCourseLessons.trim().toLowerCase() === 'true') {
                res.status(200).json({ course: course, lessons: courseLessons });
                return;
            }
            res.status(200).json({ course: course });
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
