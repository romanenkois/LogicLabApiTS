import { MongoDB } from '@database';
import { CourseMapper } from '@mappers';
import { Course, Lesson, LessonSimple, SelectionOption } from '@types';

export class CourseService {
  // TODO: add selection option
  public static async getCoursesList(selectionOption?: SelectionOption): Promise<Course[]> {
    const courses: Course[] = [];
    const collectionName = 'courses';
    const db = await MongoDB.getDB();

    const responce = await db
      .collection(collectionName)
      .find()
      .toArray();

    if (!responce) {
      return [];
    }

    for (const course of responce) {
      courses.push(course as Course);
    }

    return courses;
  }

  public static async getCourse(courseHref: string): Promise<Course | null> {
    let course: Course | null = null;
    const collectionName = 'courses';
    const db = await MongoDB.getDB();

    const courseResponce = await db
      .collection(collectionName)
      .findOne({ href: courseHref });

    if (courseResponce) {
      course = courseResponce as Course;
    }

    return course;
  }

  public static async getLesson(
    lessonHref: string
  ): Promise<Lesson | null> {
    const collectionName = `lessons`;
    const db = await MongoDB.getDB();

    const responce = await db
      .collection(collectionName)
      .findOne({ href: lessonHref });

    if (responce) {
      return responce as Lesson;
    } else {
      return null;
    }
  }

  public static async addCourse(course: Course): Promise<Course | null> {
    const collectionName = 'courses';
    const db = await MongoDB.getDB();

    let course_: any = course;
    course_.id = undefined;

    const responce = await db.collection(collectionName).insertOne(course_);

    if (responce.insertedId) {
      const course__ = await this.getCourse(course.href);
      
      if (course__) {
        return course__;
      } else {
        throw new Error('Failed to add course');
      }
    } else {
      throw new Error('Failed to add course');
    }
  }

  public static async addLesson(lesson: Lesson): Promise<Lesson | null> {
    const collectionName = 'lessons';
    const db = await MongoDB.getDB();

    let lesson_: any = lesson;
    lesson_.id = undefined;

    const responce = await db.collection(collectionName).insertOne(lesson);

    if (responce.insertedId) {
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
