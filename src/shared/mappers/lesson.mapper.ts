import { LessonSchema } from "@schemas";
import { Lesson, LessonSimple } from "@types";

export class LessonMapper{
  public static mapFromSchema(lessonSchema: LessonSchema): Lesson {
    return {
      id: lessonSchema._id,
      href: lessonSchema.href,
      name: lessonSchema.name,
      title: lessonSchema.title,
      description: lessonSchema.description,
      content: lessonSchema.content,
    };
  }

  public static mapFromSchemaToSimple(lessonSchema: LessonSchema): LessonSimple {
    return {
      id: lessonSchema._id,
      href: lessonSchema.href,
      name: lessonSchema.name,
      title: lessonSchema.title,
      description: lessonSchema.description,
    }
  }

  public static mapToSchema(lesson: Lesson): LessonSchema {
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