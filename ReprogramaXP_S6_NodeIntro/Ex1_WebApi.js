const express = require ('express') //1-importando a biblioteca do express
const bodyParser = require ('body-parser')
const { request } = require('http')
const { response } = require('express')

const app = express()//2-Criando uma variável app para consumir o express
app.use(bodyParser.json())//O comando bodyParse irá fazer um tratamento das informações transformando-as em JSON --> se faltar esse comando não será possível visualizar no terminal os dados relativos ao JSON
const PORT = 3001 //3-Definindo a porta que será usada pelo servidor


//Código de liberação para acesso a URL no postman
/*app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    res.header("Access-Control-Allow-Methods","*");
    next();

});*/


//4-É necessário pegar a const app com o comando .listen (resposnável por subir a aplicação) com os parâmetros da porta (PORT, que é a variável que receb a porta) no qual subiremos o servidor e função com informação de estatus do servidor funcionando.
app.listen(PORT, function(resquest, response){
    console.log('Servidor funcionando')
})

//5-Criando a API que deseja obter(retorno) recursos do servidor
//variável app receberá dois parâmetros (o primeiro é o da URL e o segundo será uma function no qual o Jason irá retornar a solicitação enviada ) do que irá retornar.
//Criando um array que representa a tabela de consulta que irá retornar uma lista de objetos
app.get('/book', function listBooks(request, response){ 
    const books = [
        {
            name: 'Harry Potter',
            autor: 'JK',
            id: 1
        }
    ]
    return response.status(200).send(books) //Efetuamos o retorno pelo response com o status 200 e a lista de livros
})


//6-Criando uma API para enviar dados com aero function
const createBook = (request, response) =>{
    const book = request.body
    console.log('BOOK', book)
    if(book.name && book.autor && book.id){
        return response.status(201).send({message: 'Livro cadastrado com sucesso!'})

    }else{
        return response.status(400).send({message: 'Falta enviar o body corretamente'})

    }    
}

//7b-Enviando o delete pelo ID través da URL usando a aero function
const deleteBook = (request, response)=>{ //Efetuando a solicitação e resposta para a ação de deletar um book
    const id = request.params.id  //Determinando a requisição com o parâmetro por ID
    console.log('id', id)

    if(id){
        return response.status(201).send({message:'Id deletado com sucesso!'})
    }else{
        return response.status(400).send({message:'Falta enviar o id na URL.'})
    }    
}

const updateBook = (request, response)=>{
const id = request.params.id
console.log('id', id)

if(id){
      return response.status(201).send({message: 'Atualização registrada com sucesso!'})
    }else{
        return response.status(400).send({message: 'Dados do id não confere ou não forma informados. Favor verificar dados corretos para atualização das informações.'})
    }
}


app.get('/book', listBooks)
app.post('/book', createBook)
app.delete('/book/:id', deleteBook) //7a-Enviando o delete do pela URL (/book) pela especificação determinada anteriormente(ID)
app.put('/book/:id', updateBook) //8a-A operação de atualizar também deve ser enviada pelo Id assim como a de deletar (boas práticas)




