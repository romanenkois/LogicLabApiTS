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
exports.getLessonComments = void 0;
const _utils_1 = require("../../../shared/utils/index.js");
const _services_1 = require("../../../services/index.js");
const getLessonComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lessonHref = req.query['lessonhref'];
        if (!lessonHref || lessonHref.trim() === '') {
            res.status(400).json({ message: 'lesson href is required' });
            return;
        }
        const comments = yield _services_1.CommentsService.getCommentsOfLesson(lessonHref);
        res.status(200).json({ comments: comments });
        return;
    }
    catch (error) {
        (0, _utils_1.errorHandler)(res, error);
    }
});
exports.getLessonComments = getLessonComments;
