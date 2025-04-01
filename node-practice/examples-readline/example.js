const readline = require("readline");
const logToFile = require("./logger");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Hola bienvenido, ");
rl.question("Por favor indica cuántos años tienes: ", (answer) => {
  const age = parseInt(answer);

  if (age >= 18) {
    console.log("Eres mayor");
    logToFile(age);
  } else {
    console.log("Eres menor de edad");
  }

  rl.close();
});
