const fs = require("fs");

fs.appendFile("./data.txt", "linea\n", (err) => {
  if (err) {
    console.log("Hubo un error al escribir en el archivo:", err);
  } else {
    console.log("Línea agregada exitosamente");
  }
});
