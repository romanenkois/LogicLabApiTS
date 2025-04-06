import { Course } from '@types'

export type CourseDTO = {
  href: Course['href'];
  name: Course['name'];
  title: Course['title'];
  programmingLanguage: Course['programmingLanguage'];
  description: Course['description'];
  lessons: Course['lessons'];
};

export interface CourseSimpleDTO extends Omit<CourseDTO, 'lessons'> {};
