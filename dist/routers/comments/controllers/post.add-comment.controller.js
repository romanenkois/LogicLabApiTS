"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComment = void 0;
const _utils_1 = require("../../../shared/utils/index.js");
const _services_1 = require("../../../services/index.js");
const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = req.body.comment;
        if (!comment) {
            res.status(400).json({ message: 'no comment data provided' });
            return;
        }
        const token = req.headers['authorization'];
        if (!token) {
            res.status(401).json({ message: 'no token provided' });
            return;
        }
        const token_ = _services_1.AuthorizationService.verifyUserToken(token);
        if (!token_ || !token_.userId) {
            res.status(401).json({ message: 'invalid token' });
            return;
        }
        const comment_ = {
            lessonHref: comment.lessonHref,
            parentCommentId: comment.parentCommentId,
            userId: token_.userId,
            text: comment.text,
            attachments: comment.attachments,
        };
        const newComment = yield _services_1.CommentsService.createNewComment(comment_);
        if (!newComment) {
            res.status(500).json({ message: 'failed to create comment' });
            return;
        }
        res.status(200).json({ comment: newComment });
        return;
    }
    catch (error) {
        (0, _utils_1.errorHandler)(res, error);
    }
});
exports.addComment = addComment;
