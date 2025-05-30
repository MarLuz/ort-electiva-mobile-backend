const express = require("express");
const authRouter = express.Router();
const {
  postAuthLogin,
  postAuthSignUp,
} = require("../controllers/auth.controller");

const payloadMiddleWare = require("../middlewares/paylod.middleware");
const { signupSchema, loginSchema } = require("./validations/user.validation");

authRouter.post("/login", payloadMiddleWare(loginSchema), postAuthLogin);
authRouter.post("/signup", payloadMiddleWare(signupSchema), postAuthSignUp);

module.exports = authRouter;
