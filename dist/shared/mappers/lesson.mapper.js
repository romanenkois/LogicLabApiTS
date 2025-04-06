"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonMapper = void 0;
class LessonMapper {
    static schemaToType(lessonSchema) {
        return {
            id: lessonSchema._id,
            href: lessonSchema.href,
            name: lessonSchema.name,
            title: lessonSchema.title,
            description: lessonSchema.description,
            content: lessonSchema.content,
        };
    }
    static schemaToTypeSimple(lessonSchema) {
        return {
            id: lessonSchema._id,
            href: lessonSchema.href,
            name: lessonSchema.name,
            title: lessonSchema.title,
            description: lessonSchema.description,
        };
    }
    static typeToSchema(lesson) {
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
