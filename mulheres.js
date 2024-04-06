const express = require("express"); //AQUI ESTOU INICIANDO O EXPRESS
const router = express.Router(); //AQUI ESTOU CONF A PRIMEIRA PARTE DA ROTA
const cors = require("cors"); // aqui estou trazendo o pacote cors que permite consumir essa api no front-end

const conectaBancoDeDados = require("./bancoDeDados"); //AQUI ESTOU LIGANDO O ARQUIVO AO BANCO DE DADOS
conectaBancoDeDados(); //ESTOU CHAMANDO A FUNÇÃO QUE CONECTA O BANCO DE DADOS

const Mulher = require("./mulherModel");
const app = express(); //AQUI ESTOU INICIANDO O APP
app.use(express.json()); //TRATANDO AS REQUISIÇÕES E SERÃO EM FORMATO JSON
app.use(cors());
const porta = 333; //AQUI ESTOU CRIANDO A PORTA

//GET
async function mostraMulheres(request, response) {
  try {
    const mulheresVindasDoBancoDeDados = await Mulher.find();
    response.json(mulheresVindasDoBancoDeDados);
  } catch (erro) {
    console.log(erro);
  }
}

//POST
async function criaMulher(request, response) {
  const novaMulher = new Mulher({
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
    citacao: request.body.citacao,
  });

  try {
    const mulherCriada = await novaMulher.save();
    response.status(201).json(mulherCriada);
  } catch (erro) {
    console.log(erro);
  }
}

//PATCH
async function corrigiMulher(request, response) {
  try {
    const mulherEncontrada = await Mulher.findById(request.params.id);
    if (request.body.nome) {
      mulherEncontrada.nome = request.body.nome;
    }

    if (request.body.minibio) {
      mulherEncontrada.minibio = request.body.minibio;
    }

    if (request.body.imagem) {
      mulherEncontrada.imagem = request.body.imagem;
    }

    if (request.body.citacao) {
      mulherEncontrada.citacao = request.body.citacao;
    }

    response.json(mulheres);
  } catch (erro) {
    console.log(erro);
  }
}

//DELETE
async function deletaMuher(request, response) {
  try {
    await Mulher.findByIdAndDelete(request.params.id);
    response.json({ mensagem: "Mulher deletada com sucesso" });
  } catch (erro) {
    console.log(erro);
  }
}

app.use(router.get("/mulheres", mostraMulheres)); //CONFIGUREI ROTA GET/ MULHERES
app.use(router.post("/mulheres", criaMulher)); //CONFIGUREI ROTA POST/ MULHERES
app.use(router.patch("/mulheres/:id", corrigiMulher)); //CORRIGIR INFORMAÇÃO JA CADASTRADA ROTA PATCH/MULHERES
app.use(router.delete("/mulheres/:id", deletaMuher)); //CONFIGUREI ROTA DELETE/ MULHERES

//PORTA
function mostraPorta() {
  console.log("Servidor criado e rodando na porta", porta);
}
app.listen(porta, mostraPorta); //SERVIDOR OUVINDO A PORTA
