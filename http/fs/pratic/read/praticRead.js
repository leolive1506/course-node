const http = require('http')
const fs = require("fs")

const server = http.createServer((req, res) => {
    fs.readFile("read.html", (err, file) => {
        if(err) throw err

        res.writeHead(200, {
            "Content-type": "text/html"
        })

        
        res.write(file)
        res.end()
    })
    

})

server.listen(3000)