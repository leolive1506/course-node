const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

const dates = [
    {
        "caracteristica": "cabelo",
        "especificacao": "O mais lindo"
    },

    {
        "caracteristica": "perninhas",
        "especificacao": "A mais perfeitinha"
    },

    {
        "caracteristica": "ela",
        "especificacao": "Linda, perfeita, maravilhosa demais"
    },
]

router.get("/:searchCaracteristica", (req, res) => {
    const getCaracteristica = req.params.searchCaracteristica

    const existsCaracteristica = dates.find(carac => carac.caracteristica == getCaracteristica)

    if(!existsCaracteristica) {
        res.status(404).sendFile(__dirname + "/error.html")
    } else {
        res.status(200).json(existsCaracteristica)
    }
})

module.exports = router