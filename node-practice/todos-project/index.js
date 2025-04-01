const readline = require("readline");
const logToFile = require("./utils/logger");
const { getToDosAxios } = require("./utils/httpClient");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("[TODO APP] Bienvenido: 👋🏻");
rl.question("Por favor Ingresa tu id de usuario:", (answer) => {
  console.log("Procesando ... 🤔");
  getToDosAxios(answer, (err, data) => {
    if (err) {
      console.log("🙈 ha ocurrido un error: ", err);
    } else {
      console.log(data);
      logToFile(JSON.stringify(data, 2));
    }
  });
  rl.close();
});
