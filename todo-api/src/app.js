require("dotenv").config();
require("./utils/instrument.js");

const Sentry = require("@sentry/node");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const authMiddleWare = require("./middlewares/auth.middleware");
const privateRouter = require("./routes/private.router");
const publicRouter = require("./routes/public.router");
const authRouter = require("./routes/auth.router");
const connectMongoDB = require("./models/mongo.client");
const connectToRedis = require("./services/redis.service");
const logger = require("./utils/logger.js");

(async () => {
  try {
    await connectMongoDB();
    logger.info("Conexión a MongoDB establecida correctamente");
  } catch (error) {
    logger.sentryError({
      message: "Ha ocurrido un error al intentar conectarse a MongoDB: ",
      error,
    });
    process.exit(1);
  }
})();

(async () => {
  try {
    await connectToRedis();
    logger.info("Conexión a redis establecida correctamente");
  } catch (error) {
    console.log("Ha ocurrido un error al intentar conectarse a Redis: ", error);
    process.exit(1);
  }
})();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Public
app.use("/", publicRouter);
app.use("/v1/auth", authRouter);

app.use(authMiddleWare);
// Private
app.use("/v1", privateRouter);

// The error handler must be registered before any other error middleware and after all controllers
Sentry.setupExpressErrorHandler(app);

module.exports = app;
