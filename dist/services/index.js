"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestsService = exports.CourseService = exports.AuthorizationService = void 0;
var authorization_service_1 = require("./authorization/authorization.service");
Object.defineProperty(exports, "AuthorizationService", { enumerable: true, get: function () { return authorization_service_1.AuthorizationService; } });
var course_service_1 = require("./course/course.service");
Object.defineProperty(exports, "CourseService", { enumerable: true, get: function () { return course_service_1.CourseService; } });
var tests_service_1 = require("./tests/tests.service");
Object.defineProperty(exports, "TestsService", { enumerable: true, get: function () { return tests_service_1.TestsService; } });
