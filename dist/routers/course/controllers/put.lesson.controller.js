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
exports.addLesson = void 0;
const _utils_1 = require("../../../shared/utils/index.js");
const _services_1 = require("../../../services/index.js");
const addLesson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lesson = req.body['lesson'];
        if (!lesson || Object.keys(lesson).length === 0) {
            res.status(400).json({ message: 'Lesson data is required' });
            return;
        }
        const lesson_ = yield _services_1.CourseService.addLesson(lesson);
        if (lesson_) {
            res.status(201).json({ lesson: lesson_ });
            return;
        }
        else {
            res.status(400).json({ message: 'Failed to add lesson' });
            return;
        }
    }
    catch (error) {
        (0, _utils_1.errorHandler)(res, error);
    }
});
exports.addLesson = addLesson;
