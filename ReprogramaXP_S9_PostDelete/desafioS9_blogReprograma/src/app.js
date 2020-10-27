const express = require('express')
const app = express()

const blog = require("./routes/blog-routes")

app.use("/", blog)

app.use(express, json())


module.exports = routes

