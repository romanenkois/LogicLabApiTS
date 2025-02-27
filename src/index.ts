import express, { NextFunction, Request, Response, Router } from "express";
import cors from "cors";

import { appConfig } from '@config';
import { coursesRouter, defaultRouter, testsRouter } from "@routers";
import { sendTelegramMessage } from "@utils";
import { MongoDB } from "@database";
import { headerSizeLimiter, bodySizeLimiter, routerHandler, jsonErrorHandler } from "@middleware";

const app = express();
app.use(cors());

app.use(headerSizeLimiter());
app.use(bodySizeLimiter);

app.use(express.json({ limit: appConfig.other.bodySizeLimit }));
app.use(express.urlencoded({ limit: appConfig.other.bodySizeLimit, extended: true }));

app.use(jsonErrorHandler);
app.use(routerHandler);

// main router, v2 is the most actual version of the app
const v2Router = Router();

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
