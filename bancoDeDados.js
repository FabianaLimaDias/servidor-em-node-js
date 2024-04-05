const mongoose = require("mongoose");

async function conectaBancoDeDados() {
  try {
    console.log("Conexão com o banco de dados iniciou!");

    await mongoose.connect(
      "mongodb+srv://fabianacldias:dPiD6EnCan3sWklO@cluster0.dnv44hf.mongodb.net/"
    );

    console.log("Conexão com o banco de dados feita com sucesso!");
  } catch (erro) {
    console.log(erro);
  }
}
module.exports = conectaBancoDeDados;
