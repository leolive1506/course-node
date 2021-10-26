const http = require("http")

const port = 2000
const host = "127.0.0.10" //mudar o host que por padrão é 127.0.0.1

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html"
    })

    // interceptar as rotas
    if(req.url == '/') {
        res.write("<h1>Seja bem-vindo</h1>")
    } else if(req.url == "/usuario") {
        res.write("<h1>Usuario</h1>")
    } else if(req.url == "/usuario/adm") {
        res.write("<h1>Adm</h1>")
    }
    res.end()
})

server.listen(port, host, () => console.log("Servidor rodando"))