const fs = require("fs");

fs.writeFile("./data.txt", "Hola Mundo", (err) => {
  if (err) {
    console.log("Hubo un error al escribir en el archivo:", err);
  } else {
    console.log("Archivo escrito exitosamente");
  }
});
