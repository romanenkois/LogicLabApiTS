import { LessonSchema } from "@schemas";
import { Lesson } from "@types";

export class LessonMapper{
  public static mapFromSchema(LessonSchema: LessonSchema): Lesson {
    return {
      id: LessonSchema._id,
      href: LessonSchema.href,
      name: LessonSchema.name,
      title: LessonSchema.title,
      description: LessonSchema.description,
      content: LessonSchema.content,
    };
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