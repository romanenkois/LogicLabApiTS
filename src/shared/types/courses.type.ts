import { ProgramingLanguage } from '@types';

export interface Course {
  id: string;
  href: string;
  name: string; // short name, like to be used in cramped lists
  title: string; // long name, used in full page
  programingLanguage: ProgramingLanguage;
  description: string;
  lessons: Lesson[];
}

export interface CourseBasic {
  id: string;
  href: string;
  name: string;
  title: string;
  programingLanguage: ProgramingLanguage;
  description: string;
}

export interface CourseDTO {
  id: string;
  href: string;
  name: string;
  title: string;
  programingLanguage: ProgramingLanguage;
  description: string;
  lessons: LessonSimple[];
}
export interface Lesson {
  id: string;
  href: string;
  courseHref: string;
  category?: string;
  position: number;
  name: string;
  title: string;
  description: string;
  content?: Array<LessonContent>;
}

export interface LessonSimple {
  id: string;
  href: string;
  courseHref: string;
  category?: string;
  position: number;
  name: string;
  title: string;
  description: string;
}

export type LessonContent =
  | PlainTextBlock
  | ListBlock
  | CodeSampleBlock;

interface LessonBlock {
  type: string;
  object: object;
}

interface PlainTextBlock extends LessonBlock {
  type: 'plain-text';
  object: {
    title?: string;
    text: string;
  }
}

interface ListBlock extends LessonBlock {
  type: 'list';
  object: {
    title?: string;
    items: Array<string>;
  }
}

interface CodeSampleBlock extends LessonBlock {
  type: 'code-sample';
  object: {
    title?: string;
    programmingLanguage?: ProgramingLanguage;
    code: string;
    codeOutput?: string;
  }
}
