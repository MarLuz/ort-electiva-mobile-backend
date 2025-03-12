const fs = require("fs");

fs.readFile("./data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("No se ha pidido leer el archivo");
    return;
  }
  // console.log("✅ Contenido del archivo:\n", data.toString("utf8"));
  console.log(data);
});
