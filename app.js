const express = require("express");
const app = express();
const port = 3000;
const logger = require("morgan");
const cors = require("cors");

const dbInit = require("./models");
const homeRouter = require("./routes/home/index");
const authRouter = require("./routes/auth/index");
const usersRouter = require("./routes/users/index");

// Init database
dbInit();

app.use(
  cors({
    origin: "http://localhost:4200", // URL of the frontend
  })
);
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: false }));

const indexRouter = require("./routes/index");

app.use("/", indexRouter);
app.use(logger("dev"));

[
  {
    prefix: "/home",
    router: homeRouter,
  },
  {
    prefix: "/auth",
    router: authRouter,
  },
  {
    prefix: "/users",
    router: usersRouter,
  },
].map((item) => {
  app.use(`/api${item.prefix}`, item.router);
});

app.listen(port, () => {
  console.log(`App listening on port ${port} http://localhost:3000/api/home`);
});
