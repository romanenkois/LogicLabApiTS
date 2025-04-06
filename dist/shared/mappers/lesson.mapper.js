"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonMapper = void 0;
class LessonMapper {
    static schemaToType(lessonSchema) {
        return {
            _id: lessonSchema._id,
            href: lessonSchema.href,
            name: lessonSchema.name,
            title: lessonSchema.title,
            description: lessonSchema.description,
            content: lessonSchema.content,
        };
    }
    static schemaToTypeSimple(lessonSchema) {
        return {
            _id: lessonSchema._id,
            href: lessonSchema.href,
            name: lessonSchema.name,
            title: lessonSchema.title,
            description: lessonSchema.description,
        };
    }
    static typeToSchema(lesson) {
        return {
            _id: lesson._id,
            href: lesson.href,
            name: lesson.name,
            title: lesson.title,
            description: lesson.description,
            content: lesson.content,
        };
    }
    static typeToDTO(lesson) {
        return {
            href: lesson.href,
            name: lesson.name,
            title: lesson.title,
            description: lesson.description,
            content: lesson.content,
        };
    }
    static schemaToDTO(lesson) {
        return {
            href: lesson.href,
            name: lesson.name,
            title: lesson.title,
            description: lesson.description,
            content: lesson.content,
        };
    }
    static typeSimpleToSimpleDTO(lesson) {
        return {
            href: lesson.href,
            name: lesson.name,
            title: lesson.title,
            description: lesson.description,
        };
    }
}
exports.LessonMapper = LessonMapper;
