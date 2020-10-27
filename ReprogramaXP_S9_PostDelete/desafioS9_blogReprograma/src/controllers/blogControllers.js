const { response } = require('express')
const blogModel = require('../models/blogModel')


//Get byId
const getBlog = (request, response) => {
    response.status(200).json(blogModel)
}

const getById = (resquest, response) => {
    const { Id } = request.params
    const blog = blogModel.find(blog => blog.id = id)
     response.status(200).json(blog)
}

const getSecao = (resquest, response) => {
    const { secao } = request.query
    const blog = blogModel.find(blog => blog.secao = secao)
    response.status(200).json(blog)
}

//Post - Body
const createBlog = (resquest, response) => {
    const { secao, autoria } = require.body
    const blogId = blogModel.map(blog => blog.id = id)

    const novoId = blogId.length > 0 ? Math.max.aplly(Math, tarefaId) + 1: 1

        const novoBlog = {
        id: novoId,
        secao: secao,
        autoria: autoria,
        dataCriacao: new Date()
    }
}
blogModel.push(novoBlog)

//Delete byId
const deleteBlog = (resquest, response) => {
    const { id } = requisicao.params

    const blogM = blogModel.filter(blog => blog.id != id)
    
    if (!blogM) response.status(404).json({ mensage: 'Blog não excluído' })
        response.status(204).json({ mensage: 'Blog deletado com sucesso' })
}

response.status(201).json(novoBlog)

module.exports = {
    getBlog,
    getById,
    getSecao,
    createBlog,
    deleteBlog
}






