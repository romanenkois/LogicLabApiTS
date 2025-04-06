import { ProgrammingLanguage } from "@types";

export type LessonContentSchema =
  PlainTextBlockSchema |
  ListBlockSchema |
  CodeSampleBlockSchema;

interface LessonBlockSchema {
  type: string;
  position: number;
  object: object;
}

export interface PlainTextBlockSchema extends LessonBlockSchema {
  type: 'plain-text';
  object: {
    title?: string;
    text: string;
  }
}

export interface ListBlockSchema extends LessonBlockSchema {
  type: 'list';
  object: {
    title?: string;
    items: Array<string>;
  }
}

export interface CodeSampleBlockSchema extends LessonBlockSchema {
  type: 'code-sample';
  object: {
    title?: string;
    programmingLanguage?: ProgrammingLanguage;
    code: string;
    codeOutput?: string;
  }
}
