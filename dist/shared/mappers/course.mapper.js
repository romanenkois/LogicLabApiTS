"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseMapper = void 0;
class CourseMapper {
    static schemaToType(courseSchema) {
        return {
            _id: courseSchema._id,
            href: courseSchema.href,
            name: courseSchema.name,
            title: courseSchema.title,
            programmingLanguage: courseSchema.programmingLanguage,
            description: courseSchema.description,
            lessons: courseSchema.lessons,
        };
    }
    static typeToSchema(course) {
        return {
            _id: course._id,
            href: course.href,
            name: course.name,
            title: course.title,
            programmingLanguage: course.programmingLanguage,
            description: course.description,
            lessons: course.lessons,
        };
    }
    static typeToDTO(course) {
        return {
            href: course.href,
            name: course.name,
            title: course.title,
            programmingLanguage: course.programmingLanguage,
            description: course.description,
            lessons: course.lessons,
        };
    }
    static schemaToDTO(courseSchema) {
        return {
            href: courseSchema.href,
            name: courseSchema.name,
            title: courseSchema.title,
            programmingLanguage: courseSchema.programmingLanguage,
            description: courseSchema.description,
            lessons: courseSchema.lessons,
        };
    }
}
exports.CourseMapper = CourseMapper;
