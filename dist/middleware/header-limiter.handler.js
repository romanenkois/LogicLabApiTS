"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerSizeLimiter = void 0;
const _config_1 = require("../config/index.js");
/**
 * Middleware function, to limit the size of the request headers
 */
const headerSizeLimiter = () => (req, res, next) => {
    const headerSize = Buffer.byteLength(JSON.stringify(req.headers));
    if (headerSize > _config_1.appConfig.headerSizeLimit) {
        res.status(431).json({
            error: 'Request header size too large',
        });
        return;
    }
    next();
};
exports.headerSizeLimiter = headerSizeLimiter;
