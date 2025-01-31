"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRouter = void 0;
const express_1 = require("express");
const _config_1 = require("../../shared/config/index.js");
exports.defaultRouter = (0, express_1.Router)();
exports.defaultRouter.get('/', (req, res) => {
    res.status(200).send(_config_1.appConfig.other.basic_page_response);
});
