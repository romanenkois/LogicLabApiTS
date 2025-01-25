import { Course, CoursesList, Lesson } from "@types";

export class CourseService {
  public static async getCoursesList(): Promise<CoursesList> {
    let courses: CoursesList = [];

    return courses;
  }

  public static async getCourse(courseName: string): Promise<Course | null> {
    let course: Course | null =  null;

    return course;
  }

  public static async getLesson(courseName: string, lessonName: string): Promise<Lesson | null> {
    let lesson: Lesson | null = null;

    return lesson;
  }
}
