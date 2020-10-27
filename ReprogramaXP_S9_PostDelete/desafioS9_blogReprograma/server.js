const app = require("./src/app")

const porta = 8088

app.listen(porta, () => {
    console.log(`O servidor está rodando http://localhost:${porta}`)
})
