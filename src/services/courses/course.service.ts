import { MongoDB } from '@database';
import { Course, CoursesList, Lesson } from '@types';

export class CourseService {
  public static async getCoursesList(): Promise<CoursesList> {
    let courses: CoursesList = [];

    // TODO: rewrite
    courses = [
      {
        id: '1',
        href: 'javascript',
        name: 'Курс по JavaScript',
        programingLanguage: 'javascript',
      },
    ];

    return courses;
  }

  public static async getCourse(courseHref: string): Promise<Course | null> {
    let course: Course | null = null;

    return course;
  }

  public static async getLesson(
    courseHref: string,
    lessonHref: string
  ): Promise<Lesson | null> {
    const collectionName = `${courseHref}-lessons`;

    const responce = await MongoDB.getDB()
      .collection(collectionName)
      .findOne({ href: lessonHref });

    if (responce) {
      return responce as Lesson;
    } else {
      return null;
    }
  }
}
