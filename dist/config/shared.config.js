"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharedConfig = void 0;
const envs_1 = require("./envs");
exports.sharedConfig = {
    // link to router documentation
    apiDocumentationLink: envs_1.envs.apiDocumentationLink,
    // link to itself hosted url
    webAppLink: envs_1.envs.webAppLink,
    // generic response to GET '/'
    basic_page_response: `
    <DOCTYPE html>
    <html>
      <body>
      <h1>You are trying to access logicLabApi</h1>
      <p>Learn more about its usage, by going to <a href="__API_DOC_LINK__">our documentation</a></p>
      <p>If you ended up here by accident, go back to <a href="__LOGIC_LAB_LINK__">logicLab</a></p>
      </body>
    </html>`,
};
// Needed to fix issue of assigning values to basic page before config is initialized
exports.sharedConfig.basic_page_response = exports.sharedConfig.basic_page_response
    .replace('__API_DOC_LINK__', exports.sharedConfig.apiDocumentationLink || '')
    .replace('__LOGIC_LAB_LINK__', exports.sharedConfig.webAppLink || '');
