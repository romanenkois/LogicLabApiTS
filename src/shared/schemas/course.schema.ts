import { ProgramingLanguage } from '@types';

export interface CourseSchema {
  id: string;
  href: string;
  name: string;
  title: string;
  programingLanguage: ProgramingLanguage;
  description: string;
  lessons: {
    id: string;
    href: string;
    category?: string;
    categoryName?: string;
    position: number;
  }[]
}
