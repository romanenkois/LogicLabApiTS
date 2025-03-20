"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonErrorHandler = void 0;
const jsonErrorHandler = (error, req, res, next) => {
    if (error instanceof SyntaxError && 'body' in error) {
        res.status(400).json({
            message: 'Invalid JSON format',
        });
        return;
    }
    next(error);
};
exports.jsonErrorHandler = jsonErrorHandler;
