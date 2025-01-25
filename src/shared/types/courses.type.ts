export type ProgramingLanguage = string;

export type CoursesList = Array<{
  id: string;
  href: string;
  name: string;
  programingLanguage: ProgramingLanguage;
}>

export type Course = {
  id: string;
  href: string;
  name: string; // short name, like to be used in cramped lists
  title: string; // long name, used in full page
  programingLanguage: ProgramingLanguage;
  description: string;
  lessons: Array<Lesson>;
}

export type Lesson = {
  id: string;
  href: string;
  courseHref: string;
  name: string;
  title: string;
  description: string;
  content?: Array<LessonContent>;
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
  type: 'plainText';
  object: {
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
  type: 'codeSample';
  object: {
    title?: string;
    programmingLanguage?: ProgramingLanguage;
    code: string;
    codeOutput?: string;
  }
}
