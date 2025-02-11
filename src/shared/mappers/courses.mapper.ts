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

      // this ensures that category and categoryName are only present together
      ...(lesson.category && lesson.categoryName
        ? { category: lesson.category, categoryName: lesson.categoryName }
        : {}),

      position: lesson.position,
      name: lesson.name,
      title: lesson.title,
      description: lesson.description,
    };
  }

  public static sortSimpleLessons(lessons: LessonSimple[]): LessonSimple[] {
    return lessons.sort((a, b) => a.position - b.position);
  }
}
