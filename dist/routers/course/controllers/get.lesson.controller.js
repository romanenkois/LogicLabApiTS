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
exports.getLesson = void 0;
const _utils_1 = require("../../../shared/utils/index.js");
const _services_1 = require("../../../services/index.js");
const _mappers_1 = require("../../../shared/mappers/index.js");
const getLesson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lessonhref = req.query['href'];
        if (!lessonhref || lessonhref.trim() === '') {
            res.status(400).json({ message: 'Lesson name is required' });
            return;
        }
        const lesson = yield _services_1.CourseService.getLesson(lessonhref);
        if (lesson) {
            res.status(200).json({ lesson: _mappers_1.LessonMapper.typeToDTO(lesson) });
            return;
        }
        else {
            res.status(404).json({ error: 'Lesson not found' });
            return;
        }
    }
    catch (error) {
        (0, _utils_1.errorHandler)(res, error);
    }
});
exports.getLesson = getLesson;
