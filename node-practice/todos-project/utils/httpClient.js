const http = require("https");
const axios = require("axios");

const TODOS_BASE_URL = "https://jsonplaceholder.typicode.com/todos";

const getToDos = (userID, callback) => {
  http
    .get(`${TODOS_BASE_URL}?userId=${userID}`, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        //console.log("[STREAMING DATA] Chunk received: ", chunk);
        data += chunk;
      });

      res.on("end", () => {
        callback(data);
      });
    })
    .on("error", (err) => {
      console.log(err);
    });
};

const getToDosAxios = (userID, callback) => {
  axios
    .get(`${TODOS_BASE_URL}?userId=${userID}`)
    .then(function ({ data }) {
      callback(null, data);
    })
    .catch(function (error) {
      callback(error, null);
    });
};

module.exports = { getToDos, getToDosAxios };
