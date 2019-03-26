const opts = {
  base: {
    demand: true,
    alias: "b"
  },
  limite: {
    alias: "l",
    default: 10
  }
};

const argv = require("yargs")
  .command("listar", "imprime tabla por consola", opts)
  .command("crear", "crea archivo txt de la tabla.", opts)
  .help().argv;

module.exports = {
  argv
};
