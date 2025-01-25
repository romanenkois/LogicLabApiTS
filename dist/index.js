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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const _config_1 = require("./shared/config/index.js");
const _routers_1 = require("./routers/index.js");
const _utils_1 = require("./shared/utils/index.js");
const app = (0, express_1.default)();
const v2Router = (0, express_1.Router)(); // the router of whole app,
// this this v2, couse it is a second version
// previos v1 was made by javascript
v2Router.use('/courses', _routers_1.coursesRouter);
app.use('/v2', v2Router);
// Default router
app.get('/', (req, res) => {
    res.status(200).send(_config_1.appConfig.other.basic_page_response);
});
const PORT = _config_1.appConfig.server.port;
app.listen(PORT, () => {
    if (_config_1.appConfig.logging.console.onServerStart) {
        console.log('logicLabApiTS is running on port ', PORT);
    }
    if (_config_1.appConfig.logging.telegram.onServerStart) {
        (0, _utils_1.sendTelegramMessage)('logicLabApiTS is running');
    }
});
