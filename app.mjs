import express from "express";
import route from "./routes.mjs";

const app = express();

app.use(express.json());

app.use("/market", route);

export default app;
