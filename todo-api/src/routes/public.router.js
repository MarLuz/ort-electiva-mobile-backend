const express = require("express");
const swaggerUi = require("swagger-ui-express");
const publicRouter = express.Router();
const path = require("path");

const {
  healthController,
  pingController,
} = require("../controllers/public.controller");

app.use(express.static("public"));

publicRouter.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    explorer: true,
    swaggerOptions: {
      url: "/swagger/swagger.json",
    },
  })
);

publicRouter.get("/health", healthController);
publicRouter.get("/ping", pingController);

module.exports = publicRouter;
