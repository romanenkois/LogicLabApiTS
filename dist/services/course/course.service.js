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
const mongodb_1 = require("mongodb");
class CourseService {
    // TODO: add selection option
    static getCoursesList(selectionOption) {
        return __awaiter(this, void 0, void 0, function* () {
            const courses = [];
            const collectionName = 'courses';
            const db = yield _database_1.MongoDB.getDB();
            const response = yield db.collection(collectionName).find().toArray();
            if (response) {
                for (const course of response) {
                    courses.push(_mappers_1.CourseMapper.schemaToType(course));
                }
            }
            return courses;
        });
    }
    static checkForExisting(collectionName, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield _database_1.MongoDB.getDB();
            const query = params.id
                ? { _id: new mongodb_1.ObjectId(params.id) }
                : params.href
                    ? { href: params.href }
                    : {};
            const exists = yield db.collection(collectionName).findOne(query);
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
                course = _mappers_1.CourseMapper.schemaToType(response);
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
                return _mappers_1.LessonMapper.schemaToType(response);
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
                return _mappers_1.LessonMapper.schemaToTypeSimple(response);
            }
            else {
                return null;
            }
        });
    }
    static getSimpleLessons(lessonHref) {
        return __awaiter(this, void 0, void 0, function* () {
            const lessons = [];
            for (const href of lessonHref) {
                const lesson = yield this.getSimpleLesson(href);
                if (lesson) {
                    lessons.push(lesson);
                }
            }
            return lessons;
        });
    }
    static addCourse(course) {
        return __awaiter(this, void 0, void 0, function* () {
            const collectionName = 'courses';
            const db = yield _database_1.MongoDB.getDB();
            const course_ = _mappers_1.CourseMapper.typeToSchema(course);
            const hasTheSameHref = yield this.getCourse(course.href);
            if (hasTheSameHref) {
                throw new Error('Course with the same href already exists');
            }
            const response = yield db.collection(collectionName).insertOne(course_);
            if (response.insertedId) {
                const course__ = yield this.getCourse(course.href);
                if (course__) {
                    return course__;
                }
            }
            throw new Error('Failed to add object');
        });
    }
    static addLesson(lesson) {
        return __awaiter(this, void 0, void 0, function* () {
            const collectionName = 'lessons';
            const db = yield _database_1.MongoDB.getDB();
            const lesson_ = _mappers_1.LessonMapper.typeToSchema(lesson);
            const hasTheSameHref = yield this.getLesson(lesson.href);
            if (hasTheSameHref) {
                throw new Error('Lesson with the same href already exists');
            }
            const response = yield db.collection(collectionName).insertOne(lesson_);
            if (response.insertedId) {
                const lesson__ = yield this.getLesson(lesson.href);
                if (lesson__) {
                    return lesson__;
                }
            }
            throw new Error('Failed to add lesson');
        });
    }
}
exports.CourseService = CourseService;
