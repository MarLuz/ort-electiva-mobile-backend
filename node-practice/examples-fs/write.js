const fs = require("fs");

fs.writeFile("./data.txt", "Hola ¿Como estan?", (err) => {
  if (err) {
    console.log("Ha ocurrido un error");
    return;
  }

  console.log("Escritura en archivo correcta");
});
