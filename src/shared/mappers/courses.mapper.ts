import { Course, CourseDTO, CourseBasic, Lesson, LessonSimple } from '@types';

export function mapToBasicCourse(course: Course): CourseBasic {
  return {
    id: course.id,
    href: course.href,
    name: course.name,
    title: course.title,
    programingLanguage: course.programingLanguage,
    description: course.description,
  };
}

export function mapToDtoCourse(course: Course): CourseDTO {
  return {
    id: course.id,
    href: course.href,
    name: course.name,
    title: course.title,
    programingLanguage: course.programingLanguage,
    description: course.description,
    lessons:
      course.lessons && course.lessons.length > 0
        ? course.lessons.map(mapToSimpleLesson)
        : [],
  };
}

export function mapToSimpleLesson(lesson: Lesson): LessonSimple {
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
