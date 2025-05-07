import { ObjectId } from 'mongodb';
import { LessonSchema } from './lesson.schema';

type Attachment =
  // | {
  //     type: 'image';
  //     url: string;
  //   }
  | {
      type: 'code';
      code: string;
      programmingLanguage: string;
    };

export type CommentSchema = {
  _id: ObjectId;
  lessonHref: LessonSchema['href'];
  parentCommentId: ObjectId | null; // null if its the parental comment
  userId: ObjectId;

  text: string;
  attachments?: Attachment[];

  createdAt: Date;
  updatedAt: Date;
};
