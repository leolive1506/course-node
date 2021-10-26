const http = require('http')
const fs = require('fs')

// fs -> file system

const port = process.env.PORT
console.log(port)

const server = http.createServer((req, res) => {
    // appendFile(arquivo, conteudo, function(error) )
    fs.appendFile("teste.txt", "Curso de node", erro => {
        //appendFile -> anexar arquivo
        if(erro) throw erro

        console.log("Arquivo Criado")

        res.end()
    }) 
})


server.listen(port || 3000, () => console.log("servidor rodando"))