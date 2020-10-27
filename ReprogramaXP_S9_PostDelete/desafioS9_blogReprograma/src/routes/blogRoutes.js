const { request } = require("express");
const express = require("express")
const router = express.Router()
const cors = require("cors")

const blogController = require("../controllers/blogControllers")

//@router GET Blog
//@desc Retornar todo o blog 
//@access Public
router.get('/blog', cors(), blogController.getBlog)

//@router GET Blog
//@query seção
//@desc Retornar seções 
//@access Public
router.get('/blog/secao', cors(), blogController.getSecao)

//@router GET Blog
//@params: id
//@desc Retornar apenas um blog
//@access Public
//@endpoint http://localhost:porta/blog/:id
router.get('/blog/:id', cors(), blogController.getIdBlog)

//@router POST Blog
//@params: id
//@desc Criar um blog
//@access Public
//@endpoint http://localhost:porta/blog/:id
router.post('/blog', cors(), blogController.criarBlog)

//@router Delete Blog
//@params: id
//@desc Deletar apenas um blog
//@access Public
//@endpoint http://localhost:porta/blog/:id
router.delete('/blog/:id', cors(), blogController.deletarTarefa)

module.exports = router


