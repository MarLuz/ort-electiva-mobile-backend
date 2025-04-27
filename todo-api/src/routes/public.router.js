const express = require("express");
const swaggerUi = require("swagger-ui-express");
const publicRouter = express.Router();
const swaggerDocument = require("../../docs/swagger.json");

const {
  healthController,
  pingController,
} = require("../controllers/public.controller");

publicRouter.get("/health", healthController);
publicRouter.get("/ping", pingController);
publicRouter.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = publicRouter;
