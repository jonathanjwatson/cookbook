import express, { Application, Request, Response } from "express";

import ingredientsRouter from "./ingredients";


const app: Application = express();

app.use('/api/v1', ingredientsRouter);

export default app;