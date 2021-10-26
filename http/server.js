const http = require("http")

http.createServer((req, res) => {
    res.writeHead(200, { //200 -> status ok
        "Content-Type": 'text/plain' // texto comum
    })

    res.write("Saida no browser \nIsso que sai no browsers") // oq vai ver
    res.end()
}).listen(2000)