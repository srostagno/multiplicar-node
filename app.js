const { crearTable, listarTable } = require("./multiplicar/multiplicar");
const { argv } = require("./config/yargs");
var colors = require("colors");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTable(argv.base, argv.limite)
      .then(data => console.log(`${data} es la wea.`))
      .catch(err => console.log(err));
    break;
  case "crear":
    crearTable(argv.base, argv.limite)
      .then(archivo => console.log(`${archivo} creado.`.blue))
      .catch(err => console.log(err));
    break;
  default:
    console.log("comando no reconocido.");
}

/* let parametro = argv[2];
let base = parametro.split("=")[1]; */

/* console.log("Limite:", argv.limite); */

/* crearTable(base)
  .then(archivo => console.log(`${archivo} creado.`))
  .catch(err => console.log(err)); */
