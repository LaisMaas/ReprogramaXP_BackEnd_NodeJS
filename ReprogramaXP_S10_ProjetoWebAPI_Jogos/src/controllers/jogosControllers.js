const jogo = require("../models/jogos.json")

const atualizarNome = (resquest, response) => {
    const jogoAtualizado = resquest.body
    const nome = resquest.params.name
    const jogosNome = jogos.map(jogo => jogo.name)
    const atualizarNomes = jogosNome.indexOf(name)
    
    const jogoNomeAtualizado = { name, ...jogoAtualizado }
    jogos.splice(atualizarNomes)

    response.status(200).send(jogos.find(jogo => jogo.name === name))

    console.log(jogos)
}

module.exports = {
    atualizarNome
}