"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const _config_1 = require("../../config/index.js");
class Logger {
    /**
     * Log a request
     * @param request - The request
     * @param request.method - The request method
     * @param request.url - The request URL
     * @param request.headers - The request headers as a dictionary
     * @param request.body - The request body as a string
     * @returns void
     */
    static logRequest(request) {
        if (_config_1.loggingConfig.console.onRequest) {
            console.log(`Request: ${request.method} ${request.url}`);
        }
    }
    /**
     * Log an error
     * @param error - The error
     * @returns void
     */
    static logError(error) {
        if (2 > 1) {
            console.error('Error:', error);
        }
    }
}
exports.Logger = Logger;
