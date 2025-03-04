import { ProgramingLanguage } from '@types';
import { LessonSimpleSchema } from '@schemas'
import { ObjectId } from 'mongodb';

export interface CourseSchema {
  _id: ObjectId;
  href: string;
  name: string;
  title: string;
  programingLanguage: ProgramingLanguage;
  description: string;
  lessons: LessonSimpleSchema[]
}
