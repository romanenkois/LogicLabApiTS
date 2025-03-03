"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerHandler = void 0;
const _logger_1 = require("../shared/logger/index.js");
/**
 * Middleware function to log every request
 * @param req - The request object
 * @param res - The response object
 * @param next - The next middleware function
 */
const routerHandler = (req, res, next) => {
    _logger_1.Logger.logRequest({
        method: req.method,
        url: req.url,
        headers: Object.fromEntries(Object.entries(req.headers).map(([k, v]) => [k, String(v)])),
        body: req.body,
    });
    next();
};
exports.routerHandler = routerHandler;
