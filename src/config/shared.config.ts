import { envs } from './envs';

export const sharedConfig = {
  // link to router documentation
  apiDocumentationLink: envs.apiDocumentationLink,
  // link to itself hosted url
  webAppLink: envs.webAppLink,
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
sharedConfig.basic_page_response = sharedConfig.basic_page_response
  .replace('__API_DOC_LINK__', sharedConfig.apiDocumentationLink || '')
  .replace('__LOGIC_LAB_LINK__', sharedConfig.webAppLink || '');
