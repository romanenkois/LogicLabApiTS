"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToSimpleLesson = mapToSimpleLesson;
function mapToSimpleLesson(lesson) {
    return Object.assign(Object.assign({ id: lesson.id, href: lesson.href, courseHref: lesson.courseHref }, (lesson.category && { category: lesson.category })), { position: lesson.position, name: lesson.name, title: lesson.title, description: lesson.description });
}
