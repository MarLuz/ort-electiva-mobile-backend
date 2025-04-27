const express = require("express");
const swaggerUi = require("swagger-ui-express");
const publicRouter = express.Router();

const {
  healthController,
  pingController,
} = require("../controllers/public.controller");

publicRouter.get("/health", healthController);
publicRouter.get("/ping", pingController);

publicRouter.get("/swagger/swagger.json", (req, res) => {
  res.sendFile(path.join(__dirname, "../../docs/swagger.json"));
});

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

module.exports = publicRouter;
