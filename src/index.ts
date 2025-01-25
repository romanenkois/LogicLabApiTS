import express, { Request, Response, Router } from "express";

import { appConfig } from '@config';
import { coursesRouter } from "@routers";
import { sendTelegramMessage } from "@utils";

const app = express();
const v2Router = Router();  // the router of whole app,
                            // this this v2, couse it is a second version
                            // previos v1 was made by javascript

v2Router.use('/courses', coursesRouter);
app.use('/v2', v2Router);

// Default router
app.get('/', (req: Request, res: Response) => {
	res.status(200).send(appConfig.other.basic_page_response);
})

const PORT = appConfig.server.port;

app.listen(PORT, () => {
  if (appConfig.logging.console.onServerStart) {
    console.log('logicLabApiTS is running');
  }
  if (appConfig.logging.telegram.onServerStart) {
    sendTelegramMessage('logicLabApiTS is running');
  }
})
