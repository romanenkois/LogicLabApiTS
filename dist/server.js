"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const _config_1 = require("./config/index.js");
const _routers_1 = require("./routers/index.js");
const _utils_1 = require("./shared/utils/index.js");
const _database_1 = require("./database/index.js");
const _middleware_1 = require("./middleware/index.js");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, _middleware_1.headerSizeLimiter)());
app.use(_middleware_1.bodySizeLimiter);
app.use(express_1.default.json({ limit: _config_1.appConfig.bodySizeLimit }));
app.use(express_1.default.urlencoded({ limit: _config_1.appConfig.bodySizeLimit, extended: true }));
app.use(_middleware_1.jsonErrorHandler);
app.use(_middleware_1.routerHandler);
// main router, v2 is the most actual version of the app
const v2Router = (0, express_1.Router)();
v2Router.use('/courses', _routers_1.coursesRouter);
v2Router.use('/tests', _routers_1.testsRouter);
app.use('/v2', v2Router);
app.use('/', _routers_1.defaultRouter); // default router for basic non-app responces, doesnt need versioning
const PORT = _config_1.appConfig.port;
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    if (_config_1.loggingConfig.console.onServerStart) {
        console.log(`logicLabApiTS running on http://localhost:${PORT}`);
    }
    if (_config_1.loggingConfig.telegram.onServerStart) {
        (0, _utils_1.sendTelegramMessage)('logicLabApiTS running');
    }
    yield _database_1.MongoDB.connect();
}));
