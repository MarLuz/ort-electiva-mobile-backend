const fs = require("fs");

fs.readFile("./data.txt", (err, data) => {
  if (err) {
    console.log("Ha ocurrido un error al leer el archivo", err);
    return;
  }
  const txt = data.toString();
  //console.log(txt);
});

const content = fs.readFileSync("./data.txt");
console.log(content.toString());
