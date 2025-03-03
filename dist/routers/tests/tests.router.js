"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testsRouter = void 0;
const express_1 = require("express");
const get_test_data_controller_1 = require("./controllers/get.test-data.controller");
const post_test_check_controllers_1 = require("./controllers/post.test-check.controllers");
exports.testsRouter = (0, express_1.Router)();
exports.testsRouter.get('/test', get_test_data_controller_1.getTestData);
exports.testsRouter.post('/checkTest', post_test_check_controllers_1.checkTestAnswer);
