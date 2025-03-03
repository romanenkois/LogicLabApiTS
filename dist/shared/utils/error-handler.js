"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (res, error) => {
    console.error('Error:', error);
    res.status(500).json({ message: `Internal error\n ${error}` });
};
exports.errorHandler = errorHandler;
