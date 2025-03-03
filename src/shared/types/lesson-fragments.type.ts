import { LessonContentSchema, PlainTextBlockSchema, ListBlockSchema, CodeSampleBlockSchema } from "@schemas";

export type LessonContent = LessonContentSchema;

export interface PlainTextBlock extends PlainTextBlockSchema {};
export interface ListBlock extends ListBlockSchema {};
export interface CodeSampleBlock extends CodeSampleBlockSchema {};
