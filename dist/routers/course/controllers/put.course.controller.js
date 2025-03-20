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
exports.addCourse = void 0;
const _utils_1 = require("../../../shared/utils/index.js");
const _services_1 = require("../../../services/index.js");
const addCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = req.body['course'];
        if (!course || Object.keys(course).length === 0) {
            res.status(400).json({ message: 'Course data is required' });
            return;
        }
        const course_ = yield _services_1.CourseService.addCourse(course);
        if (course_) {
            res.status(201).json({ course: course_ });
            return;
        }
        else {
            res.status(400).json({ message: 'Failed to add course' });
            return;
        }
    }
    catch (error) {
        (0, _utils_1.errorHandler)(res, error);
    }
});
exports.addCourse = addCourse;
