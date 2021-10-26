const express = require("express")

const rotas = express.Router() //preparado para trabalhar com rotas

// const App = express() não criou pq vai fazer no index.js

let cursosInfo = [
    {
        "curso": "node",
        "info": "Curso de node"
    },
    {
        "curso": "react",
        "info": "Curso de react"
    },
    {
        "curso": "arduino",
        "info": "Curso de arduino"
    },
]

rotas.get('/', (req, res) => {
    res.json({ola: "Seja bem-vindo"})
})

rotas.get('/:cursoid', (req, res) => {
    const currentCurso = req.params.cursoid //vai ver oq digitou

    const cursoI = cursosInfo.find(i => i.curso == currentCurso)

    if(!cursoI) {
        res.status(404).json({
            erro: 'Curso não encontrado', currentCurso
        })
    } else {
        res.status(200).json(cursoI)
    }
})


module.exports = rotas