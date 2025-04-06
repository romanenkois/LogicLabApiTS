import { LessonSchema } from "@schemas";
import { LessonContentSchema, PlainTextBlockSchema, ListBlockSchema, CodeSampleBlockSchema } from "@schemas";

export type Lesson = {
  _id: LessonSchema['_id'];
  href: LessonSchema['href'];
  name: LessonSchema['name'];
  title: LessonSchema['title'];
  description: LessonSchema['description'];
  content: LessonSchema['content'];
}

export interface LessonSimple extends Omit<Lesson, 'content'> {};


export type LessonContent = LessonContentSchema;

export interface PlainTextBlock extends PlainTextBlockSchema {};
export interface ListBlock extends ListBlockSchema {};
export interface CodeSampleBlock extends CodeSampleBlockSchema {};
