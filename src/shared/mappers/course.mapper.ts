import { CourseSchema } from '@schemas';
import { Course } from '@types';

export class CourseMapper {
  public static mapFromSchema(courseSchema: CourseSchema): Course {
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

  public static mapToSchema(course: Course): CourseSchema {
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
