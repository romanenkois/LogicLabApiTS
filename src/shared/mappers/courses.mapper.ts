import { Lesson, LessonSimple } from '@types';

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
