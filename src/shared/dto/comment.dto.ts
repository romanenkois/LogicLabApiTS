import { CommentSchema } from "@schemas"

export type CommentDTO =  {
  id: CommentSchema['_id']
  lessonHref: CommentSchema['lessonHref']
  parentCommentId: CommentSchema['parentCommentId']
  userId: CommentSchema['userId']
  text: CommentSchema['text']
  attachments: CommentSchema['attachments']
  createdAt: CommentSchema['createdAt']
  updatedAt: CommentSchema['updatedAt']
}
