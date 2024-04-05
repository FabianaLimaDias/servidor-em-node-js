const mongoose = require("mongoose");

const MulherSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },

  imagem: {
    type: String,
    required: true,
  },

  citacao: {
    type: String,
    require: true,
  },

  miniBio: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("diva", MulherSchema);
