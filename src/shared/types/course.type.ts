import { CourseSchema } from '../schemas/course.schema';

// we base it on schema from db, we use pick, so like extending schema would not expose
// potentially sensitive data from db to user
export type Course = {
  _id: CourseSchema['_id'];
  href: CourseSchema['href'];
  name: CourseSchema['name'];
  title: CourseSchema['title'];
  programmingLanguage: CourseSchema['programmingLanguage'];
  description: CourseSchema['description'];
  lessons: CourseSchema['lessons'];
}

export interface CourseSimple extends Omit<Course, 'lessons'> {};
