const express = require("express");
const router = express.Router(); //rota

const app = express();
const porta = 3333;

function mostraMulher(request, response) {
  //chamar require e response
  //objeto //json envia varias informações
  response.json({
    nome: "Mulher",
    imagem: "https://www.designi.com.br/681ec2a35f63b25a",
    minibio: "forte e corajosa",
  });
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta", porta);
}

app.use(router.get("/mulher", mostraMulher));
app.listen(porta, mostraPorta);

mostraPorta();
