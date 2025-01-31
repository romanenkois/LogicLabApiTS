"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRouter = exports.coursesRouter = void 0;
var course_router_1 = require("./course/course.router");
Object.defineProperty(exports, "coursesRouter", { enumerable: true, get: function () { return course_router_1.coursesRouter; } });
var default_router_1 = require("./default/default.router");
Object.defineProperty(exports, "defaultRouter", { enumerable: true, get: function () { return default_router_1.defaultRouter; } });
