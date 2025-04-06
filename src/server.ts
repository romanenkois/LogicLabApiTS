import express, { NextFunction, Request, Response, Router } from "express";
import cors from "cors";

import { appConfig, loggingConfig } from '@config';
import { coursesRouter, defaultRouter, testsRouter } from "@routers";
import { sendTelegramMessage } from "@utils";
import { MongoDB } from "@database";
import { headerSizeLimiter, bodySizeLimiter, routerHandler, jsonErrorHandler } from "@middleware";

const app = express();
app.use(cors());

app.use(headerSizeLimiter());
app.use(bodySizeLimiter);

app.use(express.json({ limit: appConfig.bodySizeLimit }));
app.use(express.urlencoded({ limit: appConfig.bodySizeLimit, extended: true }));

app.use(jsonErrorHandler);
app.use(routerHandler);

// main router, v2 is the most actual version of the app
const v2Router = Router();
v2Router.use('/courses', coursesRouter);
v2Router.use('/tests', testsRouter);
app.use('/v2', v2Router);

app.use('/', defaultRouter); // default router for basic non-app responses, doesn`t need versioning

const PORT = appConfig.port;

app.listen(PORT, async () => {
  if (loggingConfig.console.onServerStart) {
    console.log(`logicLabApiTS running on http://localhost:${PORT}`);
  }
  if (loggingConfig.telegram.onServerStart) {
    sendTelegramMessage('logicLabApiTS running');
  }

  await MongoDB.connect()
})
