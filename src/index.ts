import express, { Express, Request, Response } from "express";
import { appConfig } from '@config';

const app = express();
const port = appConfig.server.port;
// console.log(port);

app.get('/', (req: Request, res: Response) => {
	res.send('hello');
})

app.listen(port, () => {
	console.log(`server is running on port ${port}`)
})
