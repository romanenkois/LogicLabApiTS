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
    // TODO: add selection option
    static getCoursesList(selectionOption) {
        return __awaiter(this, void 0, void 0, function* () {
            const courses = [];
            const collectionName = 'courses';
            const db = yield _database_1.MongoDB.getDB();
            const response = yield db.collection(collectionName).find().toArray();
            if (!response) {
                return [];
            }
            for (const course of response) {
                courses.push(course);
            }
            return courses;
        });
    }
    static checkForExisting(collectionName, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield _database_1.MongoDB.getDB();
            const query = params.id
                ? { _id: params.id }
                : params.href
                    ? { href: params.href }
                    : {};
            // Find the document
            const exists = yield db.collection(collectionName).findOne(query);
            console.log('ex', exists);
            // Return boolean indicating existence
            return exists !== null;
        });
    }
    static getCourse(courseHref) {
        return __awaiter(this, void 0, void 0, function* () {
            let course = null;
            const collectionName = 'courses';
            const db = yield _database_1.MongoDB.getDB();
            const response = yield db
                .collection(collectionName)
                .findOne({ href: courseHref });
            if (response) {
                course = response;
            }
            return course;
        });
    }
    static getLesson(lessonHref) {
        return __awaiter(this, void 0, void 0, function* () {
            const collectionName = `lessons`;
            const db = yield _database_1.MongoDB.getDB();
            const response = yield db
                .collection(collectionName)
                .findOne({ href: lessonHref });
            if (response) {
                return _mappers_1.LessonMapper.mapFromSchema(response);
            }
            else {
                return null;
            }
        });
    }
    static getSimpleLesson(lessonHref) {
        return __awaiter(this, void 0, void 0, function* () {
            const collectionName = `lessons`;
            const db = yield _database_1.MongoDB.getDB();
            const response = yield db
                .collection(collectionName)
                .findOne({ href: lessonHref });
            if (response) {
                return _mappers_1.LessonMapper.mapFromSchemaToSimple(response);
            }
            else {
                return null;
            }
        });
    }
    static getSimpleLessons(lessonHref) {
        return __awaiter(this, void 0, void 0, function* () {
            const lessons = [];
            console.log('lessonHref', lessonHref);
            for (const href of lessonHref) {
                console.log('href', href);
                const lesson = yield this.getSimpleLesson(href);
                console.log('lesson', lesson);
                if (lesson) {
                    lessons.push(lesson);
                }
            }
            console.log('lessons', lessons);
            return lessons;
        });
    }
    static addCourse(course) {
        return __awaiter(this, void 0, void 0, function* () {
            const collectionName = 'courses';
            const db = yield _database_1.MongoDB.getDB();
            const course_ = _mappers_1.CourseMapper.mapToSchema(course);
            const hasTheSameHref = yield this.checkForExisting('courses', {
                href: course_.href,
            });
            if (hasTheSameHref) {
                return null;
            }
            const response = yield db.collection(collectionName).insertOne(course_);
            if (response.insertedId) {
                const course__ = yield this.getCourse(course.href);
                if (course__) {
                    return course__;
                }
                else {
                    throw new Error('Failed to add object');
                }
            }
            else {
                throw new Error('Failed to add object');
            }
        });
    }
    static addLesson(lesson) {
        return __awaiter(this, void 0, void 0, function* () {
            const collectionName = 'lessons';
            const db = yield _database_1.MongoDB.getDB();
            const lesson_ = _mappers_1.LessonMapper.mapToSchema(lesson);
            const response = yield db.collection(collectionName).insertOne(lesson_);
            console.log('123');
            if (response.insertedId) {
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
