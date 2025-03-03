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
class CourseService {
    // TODO: add selection option
    static getCoursesList(selectionOption) {
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
    static getLesson(lessonHref) {
        return __awaiter(this, void 0, void 0, function* () {
            const collectionName = `lessons`;
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
    static addCourse(course) {
        return __awaiter(this, void 0, void 0, function* () {
            const collectionName = 'courses';
            const db = yield _database_1.MongoDB.getDB();
            let course_ = course;
            course_.id = undefined;
            const responce = yield db.collection(collectionName).insertOne(course_);
            if (responce.insertedId) {
                const course__ = yield this.getCourse(course.href);
                if (course__) {
                    return course__;
                }
                else {
                    throw new Error('Failed to add course');
                }
            }
            else {
                throw new Error('Failed to add course');
            }
        });
    }
    static addLesson(lesson) {
        return __awaiter(this, void 0, void 0, function* () {
            const collectionName = 'lessons';
            const db = yield _database_1.MongoDB.getDB();
            let lesson_ = lesson;
            lesson_.id = undefined;
            const responce = yield db.collection(collectionName).insertOne(lesson);
            if (responce.insertedId) {
                const lesson__ = yield this.getLesson(lesson.href);
                if (lesson__) {
                    return lesson__;
                }
                else {
                    throw new Error('Failed to add lesson');
                }
            }
            else {
                throw new Error('Failed to add lesson');
            }
        });
    }
}
exports.CourseService = CourseService;
