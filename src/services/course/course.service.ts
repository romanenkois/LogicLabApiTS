import { MongoDB } from '@database';
import { CourseMapper, LessonMapper } from '@mappers';
import { CourseSchema, LessonSchema } from '@schemas';
import { Course, Lesson, LessonSimple, SelectionOption } from '@types';

export class CourseService {
  // TODO: add selection option
  public static async getCoursesList(
    selectionOption?: SelectionOption
  ): Promise<Course[]> {
    const courses: Course[] = [];
    const collectionName = 'courses';
    const db = await MongoDB.getDB();

    const response = await db.collection(collectionName).find().toArray();

    if (!response) {
      return [];
    }

    for (const course of response) {
      courses.push(course as Course);
    }

    return courses;
  }

  public static async checkForExisting(
    collectionName: 'courses' | 'lessons',
    params: { id?: string; href?: string }
  ): Promise<boolean> {
    const db = await MongoDB.getDB();

    const query = params.id
      ? { _id: params.id }
      : params.href
      ? { href: params.href }
      : {};

    // Find the document
    const exists = await db.collection(collectionName).findOne(query);

    // Return boolean indicating existence
    return exists !== null;
  }

  public static async getCourse(courseHref: string): Promise<Course | null> {
    let course: Course | null = null;
    const collectionName = 'courses';
    const db = await MongoDB.getDB();

    const response = await db
      .collection(collectionName)
      .findOne({ href: courseHref });

    if (response) {
      course = response as Course;
    }

    return course;
  }

  public static async getLesson(lessonHref: string): Promise<Lesson | null> {
    const collectionName = `lessons`;
    const db = await MongoDB.getDB();

    const response: LessonSchema = await db
      .collection(collectionName)
      .findOne({ href: lessonHref });

    if (response) {
      return LessonMapper.mapFromSchema(response);
    } else {
      return null;
    }
  }

  public static async getSimpleLesson(lessonHref: string): Promise<LessonSimple | null> {
    const collectionName = `lessons`;
    const db = await MongoDB.getDB();

    const response: LessonSchema = await db
      .collection(collectionName)
      .findOne({ href: lessonHref });

    if (response) {
      return LessonMapper.mapFromSchemaToSimple(response);
    } else {
      return null;
    }
  }

  public static async getSimpleLessons(
    lessonHref: string[]
  ): Promise<LessonSimple[]> {
    const lessons: LessonSimple[] = [];

    for (const href of lessonHref) {
      const lesson = await this.getSimpleLesson(href);
      if (lesson) {
        lessons.push(lesson);
      }
    }

    return lessons;
  }

  public static async addCourse(course: Course): Promise<Course | null> {
    const collectionName = 'courses';
    const db = await MongoDB.getDB();
    const course_: Omit<CourseSchema, '_id'> = CourseMapper.mapToSchema(
      course as Course
    );

    const hasTheSameHref = await this.checkForExisting('courses', {
      href: course_.href,
    });
    if (hasTheSameHref) {
      return null;
    }

    const response = await db.collection(collectionName).insertOne(course_);

    if (response.insertedId) {
      const course__ = await this.getCourse(course.href);
      if (course__) {
        return course__;
      } else {
        throw new Error('Failed to add object');
      }
    } else {
      throw new Error('Failed to add object');
    }
  }

  public static async addLesson(lesson: Lesson): Promise<Lesson | null> {
    const collectionName = 'lessons';
    const db = await MongoDB.getDB();
    const lesson_: Omit<LessonSchema, '_id'> = LessonMapper.mapToSchema(lesson);

    const response = await db.collection(collectionName).insertOne(lesson_);

    if (response.insertedId) {
      const lesson__ = await this.getLesson(lesson.href);
      if (lesson__) {
        return lesson__;
      } else {
        throw new Error('Failed to add lesson');
      }
    } else {
      throw new Error('Failed to add lesson');
    }
  }
}
