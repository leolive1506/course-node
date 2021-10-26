const http = require("http")

const url = require('url')

const port = 2000
const host = "127.0.0.10"

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html"
    })
    res.write(req.url)

    const p = url.parse(req.url, true).query

    res.write("<br>" + p.nome)
    res.write("<br>" + p.curso)

    // colocar na ulr /?nome=Leo&curso=Curso+Node
    res.end()
})

server.listen(port, host, () => console.log("Servidor rodando"))