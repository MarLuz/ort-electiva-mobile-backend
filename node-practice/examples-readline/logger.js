const fs = require("fs");

const logToFile = (data) => {
  fs.appendFile("./log.txt", `${data}\n`, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("[Logger] Data appended");
  });
};

module.exports = logToFile;
