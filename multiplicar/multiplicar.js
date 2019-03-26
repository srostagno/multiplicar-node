const fs = require("fs");
var colors = require("colors");

let listarTable = (base, limite) => {
  return new Promise((resolve, reject) => {
    let data = "";

    console.log("========================================".green);
    console.log(`==== Table del ${base}, hasta el ${limite} =====`.green);
    console.log("========================================".green);

    if (!Number(base) || !Number(limite)) {
      reject(`${base} o ${limite} no son numeros.`);
      return;
    }

    for (var i = 0; i <= limite; i++) {
      data += `${i} * ${base} = ${i * base}\n`;
    }

    console.log(data);

    console.log("========================================".red);
    console.log(`==== Table del ${base}, hasta el ${limite} =====`.red);
    console.log("========================================".red);
  });
};

let crearTable = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    let data = "";

    if (!Number(base)) {
      reject(`${base} no es un numero.`);
      return;
    }

    for (var i = 1; i <= limite; i++) {
      data += `${i} * ${base} = ${i * base}\n`;
    }

    fs.writeFile(`./tablas/tabla-del-${base}.txt`, data, err => {
      if (err) reject(err);
      else resolve(`tabla-del-${base}`);
    });
  });
};

module.exports = {
  crearTable,
  listarTable
};
