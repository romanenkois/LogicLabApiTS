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
exports.getTestData = void 0;
const _utils_1 = require("../../../shared/utils/index.js");
const _services_1 = require("../../../services/index.js");
const getTestData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const testId = req.params.id;
        if (!testId) {
            res.status(400).json({ error: 'test id is required' });
            return;
        }
        const test = yield _services_1.TestsService.getTestData(testId);
        if (!test) {
            res.status(404).json({ error: 'test not found' });
            return;
        }
        res.status(200).json({ test: test });
        return;
    }
    catch (error) {
        (0, _utils_1.errorHandler)(res, error);
    }
});
exports.getTestData = getTestData;
