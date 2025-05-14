import { ProgrammingLanguage } from '@types';
import { ObjectId } from 'mongodb';

export interface CourseSchema {
  _id: ObjectId;
  href: string;
  name: string;
  title: string;
  programmingLanguage: ProgrammingLanguage;
  description: string;
  lessons: LessonSimpleSchema[]
}

export interface LessonSimpleSchema {
  id?: ObjectId;
  href: string;
  category?: string;
  categoryName?: string;
  position: number;
}
