import { Router } from 'express';
import { getLessonComments } from './controllers/get.lesson-comments.controller';
import { addComment } from './controllers/post.add-comment.controller';

export const commentsRouter = Router();

commentsRouter.get('/lesson-comments', getLessonComments);
commentsRouter.post('/post-comment', addComment);

