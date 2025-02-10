import { MongoDB } from '@database';
import { CourseMapper } from '@mappers';
import { Course, Lesson, LessonSimple } from '@types';

export class CourseService {
  public static async getCoursesList(): Promise<Course[]> {
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

  public static async getCourseLessons(courseHref: string): Promise<LessonSimple[]> {
    const lessons: LessonSimple[] = [];
    const collectionName = `${courseHref}-lessons`;
    const db = await MongoDB.getDB();

    const responce = await db
      .collection(collectionName)
      .find()
      .toArray();

    if (!responce) {
      return [];
    }

    for (const lesson of responce) {
      lessons.push(CourseMapper.mapToSimpleLesson(lesson as Lesson));
    }

    return lessons;
  }

  public static async getLesson(
    courseHref: string,
    lessonHref: string
  ): Promise<Lesson | null> {
    const collectionName = `${courseHref}-lessons`;
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
}
