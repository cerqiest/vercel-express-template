import express from "express";

import indexRouter from "../routes/index";

const app = express();

app.set("view engine", "ejs");
app.set("view options", {
  root: "views",
  views: ["views"],
});

app.use("/", indexRouter);

export default app;
