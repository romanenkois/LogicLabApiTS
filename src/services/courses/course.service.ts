import { MongoDB } from '@database';
import { mapToSimpleLesson } from '@mappers';
import { CourseBasic, Lesson, LessonSimple } from '@types';
import { getCourse } from 'src/routers/course/controllers/get.course.controller';

export class CourseService {
  public static async getCoursesList(): Promise<CourseBasic[]> {
    const courses: CourseBasic[] = [];
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
      courses.push(course as CourseBasic);
    }

    return courses;
  }

  public static async getCourse(courseHref: string): Promise<CourseBasic | null> {
    let course: CourseBasic | null = null;
    const collectionName = 'courses';
    const db = await MongoDB.getDB();

    const courseResponce = await db
      .collection(collectionName)
      .findOne({ href: courseHref });

    if (courseResponce) {
      course = courseResponce as CourseBasic;
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
      lessons.push(mapToSimpleLesson(lesson as Lesson));
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
