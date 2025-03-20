"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonMapper = void 0;
class LessonMapper {
    static mapFromSchema(lessonSchema) {
        return {
            id: lessonSchema._id,
            href: lessonSchema.href,
            name: lessonSchema.name,
            title: lessonSchema.title,
            description: lessonSchema.description,
            content: lessonSchema.content,
        };
    }
    static mapFromSchemaToSimple(lessonSchema) {
        return {
            id: lessonSchema._id,
            href: lessonSchema.href,
            name: lessonSchema.name,
            title: lessonSchema.title,
            description: lessonSchema.description,
        };
    }
    static mapToSchema(lesson) {
        return {
            _id: lesson.id,
            href: lesson.href,
            name: lesson.name,
            title: lesson.title,
            description: lesson.description,
            content: lesson.content,
        };
    }
}
exports.LessonMapper = LessonMapper;
