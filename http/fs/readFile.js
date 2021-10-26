const http = require('http')
const fs = require('fs')

// fs -> file system

const port = process.env.PORT
console.log(port)

const server = http.createServer((req, res) => {
    fs.readFile("index.html", (erro, arquivo) => {
        //readFile -> ler arquivo
        res.writeHead(200, {
            "Content-type": "text/html"
        })
        res.write(arquivo)

        return res.end()
    }) 
})


server.listen(port || 3000, () => console.log("servidor rodando"))