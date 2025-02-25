import express, { NextFunction, Request, Response, Router } from "express";
import cors from "cors";

import { appConfig } from '@config';
import { coursesRouter, defaultRouter, testsRouter } from "@routers";
import { jsonErrorHandler, sendTelegramMessage } from "@utils";
import { MongoDB } from "@database";

const app = express();
app.use(cors());

app.use(express.json());
app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  jsonErrorHandler(err, req, res, next);
});

const v2Router = Router();  // the router of whole app,
                            // this this v2, couse it is a second version
                            // previos v1 was made by javascript

v2Router.use('/courses', coursesRouter);
v2Router.use('/tests', testsRouter);
app.use('/v2', v2Router);
app.use('/', defaultRouter); // default router for basic non-app responces

const PORT = appConfig.server.port;

app.listen(PORT, async () => {
  if (appConfig.logging.console.onServerStart) {
    console.log('logicLabApiTS running on port ', PORT);
  }
  if (appConfig.logging.telegram.onServerStart) {
    sendTelegramMessage('logicLabApiTS running');
  }

  await MongoDB.connect()
})
