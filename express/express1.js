/* 
****Com depencias do próprio node****

    const http = require("http")

    const port = process.env.port

    const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.writeHead(200, {
            "Content-type": "text-plain"
        })

        res.end("CFB Cursos")
    })

    server.listen(port || 3000, () => console.log("Server is running")) 
*/

const express = require("express")

const App = express()
const port = process.env.PORT

App.get("/", (req, res) => {
    res.send("Seja bem vindo")
})

App.get("/canal", (req, res) => {
    res.json({"canal": "Ana lindosa"})
})

App.listen(port || 3000, () => console.log("Server is running"))