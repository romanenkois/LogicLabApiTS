import { MongoDB } from '@database';
import { CourseMapper, LessonMapper } from '@mappers';
import { CourseSchema, LessonSchema } from '@schemas';
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

  //   public static async getLessonsList(selectionOption?: any): Promise<Lesson[]> {
  //     
  // }

  public static async checkForExisting(
    collectionName: 'courses' | 'lessons',
    params: { id?: string; href?: string },
  ): Promise<boolean> {
    const db = await MongoDB.getDB();

    const query =
      params.id ? { _id: params.id } :
      params.href ? { href: params.href } :
      {};
  
    // Find the document
    const exists = await db.collection(collectionName).findOne(query);

    console.log('ex', exists)
  
    // Return boolean indicating existence
    return exists !== null;
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
    let course_: Omit<CourseSchema, '_id'>;

    try {
      course_ = { ...CourseMapper.mapToSchema(course) };
    } catch {
      throw new Error('Failed to parse user data')
    }


    const hasTheSameHref = await this.checkForExisting('courses', {href: course_.href})
    if (hasTheSameHref) {
      console.log('123123')
      return null;
    }

    const responce = await db.collection(collectionName).insertOne(course_);

    if (responce.insertedId) {
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
    let lesson_: Omit<LessonSchema, '_id'>;

    try {
      lesson_ = { ...LessonMapper.mapToSchema(lesson) };
    } catch {
      throw new Error('Failed to parse lesson data');
    }

    // const lessons: Lesson[] = await this.getLessonsList(); // Assuming a method to get all lessons
    // const hasTheSameHref = lessons.filter((l: Lesson) => l.href === lesson_.href);
    // if (hasTheSameHref.length > 0) {
    //   return null; // Lesson with the same href already exists
    // }

    const responce = await db.collection(collectionName).insertOne(lesson_);

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
