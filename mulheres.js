const express = require ("express")
const router = express.Router()

const app = express()
const porta = 333

const mulheres = [
    { 
        nome: 'Simara Conceicao',
        imagem: 'https://unsplash.com/s/photos/beautiful-woman',
        minibio: 'modelo'
    },
    {
        nome: 'Cibele',
        imagem: 'https://www.istockphoto.com/br/foto/rosto-beleza-e-cuidados-com-a-pele-com-uma-mulher-negra-em-est%C3%BAdio-para-promover-gm1460122249-494370539',
        minibio: 'modelo cibele'      
    }

]
function mostraMulheres(request,response)
{
    response.json(mulheres)

}
function mostraPorta()
{
console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get ('/mulheres',mostraMulheres))
app.listen(porta,mostraPorta)

