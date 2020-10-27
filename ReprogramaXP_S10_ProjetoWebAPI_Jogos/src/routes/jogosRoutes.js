const express = require("express")
const router = express.Router()
const controller = require("../controllers/jogosControllers")
const cors = require("cors")

router.put("/jogos/:name", cors(), controller.atualizarNome)

module.exports = router