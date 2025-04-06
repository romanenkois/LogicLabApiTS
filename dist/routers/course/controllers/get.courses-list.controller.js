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
exports.getListOfCourses = void 0;
const _utils_1 = require("../../../shared/utils/index.js");
const _services_1 = require("../../../services/index.js");
const _mappers_1 = require("../../../shared/mappers/index.js");
const getListOfCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let selectionOption = req.query['selection'];
        if (!selectionOption || selectionOption.trim() === '') {
            selectionOption = 'all';
        }
        const courses = yield _services_1.CourseService.getCoursesList(selectionOption);
        if (!courses) {
            res.status(200).json({ courses: [] });
            return;
        }
        else {
            res.status(200).json({
                courses: courses.map((course) => _mappers_1.CourseMapper.typeToDTO(course)),
            });
            return;
        }
        return;
    }
    catch (error) {
        (0, _utils_1.errorHandler)(res, error);
    }
});
exports.getListOfCourses = getListOfCourses;
