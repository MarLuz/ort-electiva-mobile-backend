const healthController = (req, res) => {
  res.status(200).send("healthy");
};

const pingController = (req, res) => {
  res.status(200).send("pong");
};

module.exports = {
  healthController,
  pingController,
};
