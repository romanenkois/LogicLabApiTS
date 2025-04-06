"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseMapper = void 0;
class CourseMapper {
    static mapFromSchema(courseSchema) {
        return {
            id: courseSchema._id,
            href: courseSchema.href,
            name: courseSchema.name,
            title: courseSchema.title,
            programmingLanguage: courseSchema.programmingLanguage,
            description: courseSchema.description,
            lessons: courseSchema.lessons,
        };
    }
    static mapToSchema(course) {
        return {
            _id: course.id,
            href: course.href,
            name: course.name,
            title: course.title,
            programmingLanguage: course.programmingLanguage,
            description: course.description,
            lessons: course.lessons,
        };
    }
}
exports.CourseMapper = CourseMapper;
