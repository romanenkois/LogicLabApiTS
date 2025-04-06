import { LessonDTO, LessonSimpleDTO } from "@dto";
import { LessonSchema } from "@schemas";
import { Lesson, LessonSimple } from "@types";

export class LessonMapper{
  public static schemaToType(lessonSchema: LessonSchema): Lesson {
    return {
      id: lessonSchema._id,
      href: lessonSchema.href,
      name: lessonSchema.name,
      title: lessonSchema.title,
      description: lessonSchema.description,
      content: lessonSchema.content,
    };
  }

  public static schemaToTypeSimple(lessonSchema: LessonSchema): LessonSimple {
    return {
      id: lessonSchema._id,
      href: lessonSchema.href,
      name: lessonSchema.name,
      title: lessonSchema.title,
      description: lessonSchema.description,
    }
  }

  public static typeToSchema(lesson: Lesson): LessonSchema {
    return {
      _id: lesson.id,
      href: lesson.href,
      name: lesson.name,
      title: lesson.title,
      description: lesson.description,
      content: lesson.content,
    };
  }

  public static typeToDTO(lesson: Lesson): LessonDTO {
    return {
      href: lesson.href,
      name: lesson.name,
      title: lesson.title,
      description: lesson.description,
      content: lesson.content,
    };
  }

  public static schemaToDTO(lesson: LessonSchema): LessonDTO {
    return {
      href: lesson.href,
      name: lesson.name,
      title: lesson.title,
      description: lesson.description,
      content: lesson.content,
    };
  }

  public static typeSimpleToSimpleDTO(lesson: LessonSimple): LessonSimpleDTO {
    return {
      href: lesson.href,
      name: lesson.name,
      title: lesson.title,
      description: lesson.description,
    };
  }
}
