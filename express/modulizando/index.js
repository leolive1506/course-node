const express = require("express")

const rotas = require("./routes/rotas")
const port = process.env.PORT || 3000

const App = express()

App.use("/", rotas)

App.get("*", (req, res) => { // quando nenhuma rota for encontrada
    res.send("Digite uma rota válida")
}) 

App.listen(port, () => console.log("rodando"))