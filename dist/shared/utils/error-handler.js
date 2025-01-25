"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHadler = void 0;
const errorHadler = (res, error) => {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal error' });
};
exports.errorHadler = errorHadler;
