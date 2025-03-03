"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseMapper = void 0;
class CourseMapper {
    static mapToSimpleCourse(course) {
        return {
            id: course.id,
            href: course.href,
            name: course.name,
            title: course.title,
            programingLanguage: course.programingLanguage,
            description: course.description,
        };
    }
    static mapToSimpleLesson(lesson) {
        return {
            id: lesson.id,
            href: lesson.href,
            name: lesson.name,
            title: lesson.title,
            description: lesson.description,
        };
    }
}
exports.CourseMapper = CourseMapper;
