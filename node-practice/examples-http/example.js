const http = require("https");

const TODOS_BASE_URL = "https://jsonplaceholder.typicode.com/todos?userId=1";

http
  .get(TODOS_BASE_URL, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      console.log("[STREAMING DATA] Chunk received: ", chunk);
      data += chunk;
    });

    res.on("end", () => {
      console.log("Respuesta completa: ", data);
    });
  })
  .on("error", (err) => {
    console.log(err);
  });
