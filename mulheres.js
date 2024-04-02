const express = require ("express")//AQUI ESTOU INICIANDO O EXPRESS
const router = express.Router()//AQUI ESTOU CONF A PRIMEIRA PARTE DA ROTA
const {v4:uuidv4} = require('uuid')

const app = express()//AQUI ESTOU INICIANDO O APP
app.use(express.json())//TRATANDO AS REQUISIÇÕES E SERÃO EM FORMATO JSON
const porta = 333//AQUI ESTOU CRIANDO A PORTA

//AQUI ESTOU CRIANDO LISTA INICIAL DE MULHERES
const mulheres = [
    { 
        id:'1',
        nome: 'Simara Conceicao',
        imagem: 'https://unsplash.com/s/photos/beautiful-woman',
        minibio: 'modelo'
    },
    {
        id:'2',
        nome: 'Cibele',
        imagem: 'https://www.istockphoto.com/br/foto/rosto-beleza-e-cuidados-com-a-pele-com-uma-mulher-negra-em-est%C3%BAdio-para-promover-gm1460122249-494370539',
        minibio: 'modelo cibele'      
    }

]
//GET
function mostraMulheres(request,response)
{
    response.json(mulheres)

}

//POST
function criaMulher(request, response)
{
    const novaMulher = {
        id:uuidv4(),
        nome: request.body.nome,
        imagem:request.body.imagem,
        minibio:request.body.minibio
    }

    mulheres.push(novaMulher)
    response.json(mulheres)
}

//PATCH
function corrigiMulher(request, response)
{
    function encontrarMulher(mulher)
    {
        if(mulher.id === request.params.id){
            return mulher   
        }
   }
    const mulherEncontrada = mulheres.find(encontrarMulher)
    
        if(request.body.nome){
            mulherEncontrada.nome = request.body.nome
        }

        if(request.body.minibio){
            mulherEncontrada.minibio = request.body.minibio
        }
        
        if(request.body.imagem){
            mulherEncontrada.imagem = request.body.imagem
        }

        response.json(mulheres)
}

//DELETE
function deletaMuher(request, response)
{
    function todasMenosEla(mulher){
        if(mulher.id !== request.params.id){
            return mulher
        }
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)
    response.json(mulheresQueFicam)
}


app.use(router.get ('/mulheres',mostraMulheres))//CONFIGUREI ROTA GET/ MULHERES
app.use(router.post('/mulheres', criaMulher)) //CONFIGUREI ROTA POST/ MULHERES
app.use(router.patch ('/mulheres/:id', corrigiMulher))//CORRIGIR INFORMAÇÃO JA CADASTRADA ROTA PATCH/MULHERES
app.use(router.delete('/mulheres/:id',deletaMuher))//CONFIGUREI ROTA DELETE/ MULHERES

//PORTA
function mostraPorta()
{
console.log("Servidor criado e rodando na porta", porta)
}
app.listen(porta,mostraPorta)//SERVIDOR OUVINDO A PORTA





