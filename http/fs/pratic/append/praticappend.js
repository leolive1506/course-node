const fs = require("fs")
const { isArgumentsObject } = require("util/types")

const values = [
    'Não sei',
    "sei tbm não",
    "não sei de novo"
]


fs.appendFile("file.txt", `${values}`, (erro) => {
    if(erro) throw erro

    console.log("deu certo meno")
})

