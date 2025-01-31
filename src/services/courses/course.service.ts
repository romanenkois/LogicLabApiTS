import { MongoDB } from '@database';
import { mapToDtoCourse, mapToBasicCourse, mapToSimpleLesson } from '@mappers';
import { Course, CourseDTO, CourseBasic, Lesson } from '@types';

export class CourseService {
  public static async getCoursesList(): Promise<CourseBasic[]> {
    const courses: CourseBasic[] = [];
    const collectionName = 'courses';

    const responce = await MongoDB.getDB()
      .collection(collectionName)
      .find()
      .toArray();

    if (!responce) {
      return [];
    }

    for (const course of responce) {
      courses.push(mapToBasicCourse(course as Course));
    }

    return courses;
  }

  public static async getCourse(courseHref: string): Promise<CourseDTO | null> {
    let course: CourseDTO | null = null;
    const collectionName = 'courses';

    const courseResponce = await MongoDB.getDB()
      .collection(collectionName)
      .findOne({ href: courseHref });

    const lessonsResponce = await MongoDB.getDB()
      .collection(`${courseHref}-lessons`)
      .find()
      .toArray();

    if (courseResponce) {
      course = mapToDtoCourse(courseResponce as Course);

      if (lessonsResponce && lessonsResponce.length > 0) {
        for (const lesson of lessonsResponce) {
          course.lessons.push(mapToSimpleLesson(lesson));
        }
      }
    }

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
