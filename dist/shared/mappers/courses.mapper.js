"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToBasicCourse = mapToBasicCourse;
exports.mapToDtoCourse = mapToDtoCourse;
exports.mapToSimpleLesson = mapToSimpleLesson;
function mapToBasicCourse(course) {
    return {
        id: course.id,
        href: course.href,
        name: course.name,
        title: course.title,
        programingLanguage: course.programingLanguage,
        description: course.description,
    };
}
function mapToDtoCourse(course) {
    return {
        id: course.id,
        href: course.href,
        name: course.name,
        title: course.title,
        programingLanguage: course.programingLanguage,
        description: course.description,
        lessons: course.lessons && course.lessons.length > 0
            ? course.lessons.map(mapToSimpleLesson)
            : [],
    };
}
function mapToSimpleLesson(lesson) {
    return Object.assign(Object.assign({ id: lesson.id, href: lesson.href, courseHref: lesson.courseHref }, (lesson.category && { category: lesson.category })), { position: lesson.position, name: lesson.name, title: lesson.title, description: lesson.description });
}
