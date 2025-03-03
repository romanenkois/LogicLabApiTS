"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestsService = void 0;
const _database_1 = require("../../database/index.js");
class TestsService {
    static getTestData(testId) {
        return __awaiter(this, void 0, void 0, function* () {
            let test = null;
            const db = yield _database_1.MongoDB.getDB();
            return test;
        });
    }
    static checkTest(testId, answers) {
        return __awaiter(this, void 0, void 0, function* () {
            let isRight = false;
            const db = yield _database_1.MongoDB.getDB();
            return isRight;
        });
    }
    static checkQuestion(testId) {
        return __awaiter(this, void 0, void 0, function* () {
            let isRight = false;
            const db = yield _database_1.MongoDB.getDB();
            return isRight;
        });
    }
}
exports.TestsService = TestsService;
