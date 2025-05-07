"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsRouter = void 0;
const express_1 = require("express");
const get_lesson_comments_controller_1 = require("./controllers/get.lesson-comments.controller");
const post_add_comment_controller_1 = require("./controllers/post.add-comment.controller");
exports.commentsRouter = (0, express_1.Router)();
exports.commentsRouter.get('/lesson-comments', get_lesson_comments_controller_1.getLessonComments);
exports.commentsRouter.post('/post-comment', post_add_comment_controller_1.addComment);
