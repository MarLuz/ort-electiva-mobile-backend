const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("¡Bienvenido al juego de adivinar el número!");
console.log("He elegido un número entre 1 y 10. ¿Puedes adivinar cuál es?");

const startGame = () => {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  rl.question("Ingresa un número:", (answer) => {
    const num = parseInt(answer);

    if (isNaN(num)) {
      console.log("Por favor, ingresa un número válido.");
      startGame();
    } else if (num < 1 || num > 10) {
      console.log("El número debe estar entre 1 y 10.");
      startGame();
    } else if (num === secretNumber) {
      console.log("🎉 ¡Felicidades! Adivinaste el número.");
      rl.close();
    } else {
      console.log(
        `Incorrecto. El número secreto es ${
          num < secretNumber ? "mayor" : "menor"
        } que ${num}. Inténtalo de nuevo.`
      );
      startGame();
    }
  });
};

startGame();
