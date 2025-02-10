import { Course, CourseSimple, Lesson, LessonSimple } from '@types';

export class CourseMapper {
  public static mapToSimpleCourse(course: Course): CourseSimple {
    return {
      id: course.id,
      href: course.href,
      name: course.name,
      title: course.title,
      programingLanguage: course.programingLanguage,
      description: course.description,
    };
  }


  public static mapToSimpleLesson(lesson: Lesson): LessonSimple {
    return {
      id: lesson.id,
      href: lesson.href,
      courseHref: lesson.courseHref,
      ...(lesson.category && { category: lesson.category }), // only include, if it was in original object
      position: lesson.position,
      name: lesson.name,
      title: lesson.title,
      description: lesson.description,
    };
  }

}
