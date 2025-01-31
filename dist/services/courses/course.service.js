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
exports.CourseService = void 0;
const _database_1 = require("../../database/index.js");
const _mappers_1 = require("../../shared/mappers/index.js");
class CourseService {
    static getCoursesList() {
        return __awaiter(this, void 0, void 0, function* () {
            const courses = [];
            const collectionName = 'courses';
            const responce = yield _database_1.MongoDB.getDB()
                .collection(collectionName)
                .find()
                .toArray();
            if (!responce) {
                return [];
            }
            for (const course of responce) {
                courses.push((0, _mappers_1.mapToBasicCourse)(course));
            }
            return courses;
        });
    }
    static getCourse(courseHref) {
        return __awaiter(this, void 0, void 0, function* () {
            let course = null;
            const collectionName = 'courses';
            const courseResponce = yield _database_1.MongoDB.getDB()
                .collection(collectionName)
                .findOne({ href: courseHref });
            const lessonsResponce = yield _database_1.MongoDB.getDB()
                .collection(`${courseHref}-lessons`)
                .find()
                .toArray();
            if (courseResponce) {
                course = (0, _mappers_1.mapToDtoCourse)(courseResponce);
                if (lessonsResponce && lessonsResponce.length > 0) {
                    for (const lesson of lessonsResponce) {
                        course.lessons.push((0, _mappers_1.mapToSimpleLesson)(lesson));
                    }
                }
            }
            return course;
        });
    }
    static getLesson(courseHref, lessonHref) {
        return __awaiter(this, void 0, void 0, function* () {
            const collectionName = `${courseHref}-lessons`;
            const responce = yield _database_1.MongoDB.getDB()
                .collection(collectionName)
                .findOne({ href: lessonHref });
            if (responce) {
                return responce;
            }
            else {
                return null;
            }
        });
    }
}
exports.CourseService = CourseService;
