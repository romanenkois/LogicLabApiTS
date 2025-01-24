"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const _config_1 = require("./shared/config/index.js");
const app = (0, express_1.default)();
const port = _config_1.appConfig.server.port;
// console.log(port);
app.get('/', (req, res) => {
    res.send('hello');
});
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
