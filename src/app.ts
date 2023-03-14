import express, { Application, Request, Response, /* NextFunction */ } from "express";

import { topicsRouter, questionsRouter } from "./router";

const app: Application = express();

app.use("/topics", topicsRouter);
app.use("/questions", questionsRouter);

app.use("/", (req: Request, res: Response): void => {
  res.json({ message: "Allo! Catch-all route." });
});

export {app};
