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
const getCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseName = req.params['courseHref'];
        if (!courseName) {
            res.status(400).json({ message: 'Course name is required' });
            return;
        }
        let course_data;
        switch (courseName) {
            case 'javascript':
                course_data = {};
                break;
            default:
                res
                    .status(404)
                    .json({ error: 'Course with that name hasnt been found' });
                break;
        }
        res.status(200).json(course_data);
    }
    catch (error) {
        (0, _utils_1.errorHadler)(res, error);
    }
});
exports.getCourse = getCourse;
