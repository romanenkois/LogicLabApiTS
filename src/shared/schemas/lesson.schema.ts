import { LessonContentSchema } from "@schemas";
import { ObjectId } from "mongodb";

export interface LessonSchema {
  _id: ObjectId;
  href: string;
  name: string;
  title: string;
  description: string;
  content: Array<LessonContentSchema>;
}

export interface LessonSimpleSchema {
  id?: ObjectId;
  href: string;
  category?: string;
  categoryName?: string;
  position: number;
}