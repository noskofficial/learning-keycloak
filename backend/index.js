import dotenv from "dotenv";
import express from "express";

import socialRouter from "./routes/socials.js";
import { jwtMiddleware } from "./routes/authenticate.js";

(async function () {
  dotenv.config();

  const { PORT } = process.env;
  const app = express();
  const server = app.listen(PORT, () =>
    console.log(`Backend started on port ${PORT}`)
  );
  server.on("error", (err) => console.error(err));

  app.use("/socials", jwtMiddleware, socialRouter);
})();
