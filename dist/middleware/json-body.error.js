"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonErrorHandler = void 0;
const jsonErrorHandler = (err, req, res, next) => {
    if (err instanceof SyntaxError && 'body' in err) {
        res.status(400).json({
            message: 'Invalid JSON format',
        });
        return;
    }
    next(err);
};
exports.jsonErrorHandler = jsonErrorHandler;
