const express = require("express")
const app = express()
const router = require("./routes/jogosRoutes")

app.use(express.json())
app.use("/", routes)

modeule.exports = app