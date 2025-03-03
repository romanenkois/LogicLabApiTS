"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodySizeLimiter = void 0;
const express_1 = require("express");
const _config_1 = require("../config/index.js");
/**
 * Middleware function, to limit data size of request body
 */
const bodySizeLimiter = (req, res, next) => {
    (0, express_1.json)({
        limit: `${_config_1.appConfig.bodySizeLimit}b`
    })(req, res, (err) => {
        if (err) {
            if (err.type === 'entity.too.large') {
                res.status(413).json({ message: 'The request payload is too large' });
                return;
            }
            else {
                next(err);
            }
        }
        next();
    });
};
exports.bodySizeLimiter = bodySizeLimiter;
