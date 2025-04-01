const fs = require("fs");

fs.appendFile("./data.txt", "\nEsta es un nuevo contenido", (err) => {
  if (err) {
    console.log("Ha ocurrido un error");
    return;
  }
  console.log("Agregado de contendo en archivo correcto");
});
