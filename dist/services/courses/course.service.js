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
            const db = yield _database_1.MongoDB.getDB();
            const responce = yield db
                .collection(collectionName)
                .find()
                .toArray();
            if (!responce) {
                return [];
            }
            for (const course of responce) {
                courses.push(course);
            }
            return courses;
        });
    }
    static getCourse(courseHref) {
        return __awaiter(this, void 0, void 0, function* () {
            let course = null;
            const collectionName = 'courses';
            const db = yield _database_1.MongoDB.getDB();
            const courseResponce = yield db
                .collection(collectionName)
                .findOne({ href: courseHref });
            if (courseResponce) {
                course = courseResponce;
            }
            return course;
        });
    }
    static getCourseLessons(courseHref) {
        return __awaiter(this, void 0, void 0, function* () {
            const lessons = [];
            const collectionName = `${courseHref}-lessons`;
            const db = yield _database_1.MongoDB.getDB();
            const responce = yield db
                .collection(collectionName)
                .find()
                .toArray();
            if (!responce) {
                return [];
            }
            for (const lesson of responce) {
                lessons.push((0, _mappers_1.mapToSimpleLesson)(lesson));
            }
            return lessons;
        });
    }
    static getLesson(courseHref, lessonHref) {
        return __awaiter(this, void 0, void 0, function* () {
            const collectionName = `${courseHref}-lessons`;
            const db = yield _database_1.MongoDB.getDB();
            const responce = yield db
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
