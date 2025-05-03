/**
 * LoggerMiddleware
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const loggerMiddleWare = (req, res, next) => {
  next();
};

module.exports = loggerMiddleWare;
