import { CourseSchema } from '@schemas';
import { Course } from '@types';
import { CourseDTO } from '@dto';

export class CourseMapper {
  public static schemaToType(courseSchema: CourseSchema): Course {
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

  public static typeToSchema(course: Course): CourseSchema {
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

  public static typeToDTO(course: Course): CourseDTO {
    return {
      href: course.href,
      name: course.name,
      title: course.title,
      programmingLanguage: course.programmingLanguage,
      description: course.description,

      lessons: course.lessons,
    };
  }

  public static schemaToDTO(courseSchema: CourseSchema): CourseDTO {
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
