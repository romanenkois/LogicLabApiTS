"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = exports.appDeployment = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.appDeployment = process.env.APP_DEPLOYMENT || 'production';
exports.appConfig = {
    port: process.env.PORT || 3000,
    // host: process.env.HOST || '0.0.0.0', 
    headerSizeLimit: 10 * 1024,
    bodySizeLimit: 10 * 1024 * 1024,
};
