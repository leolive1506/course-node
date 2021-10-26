const express = require("express")
const App = express()

const port = process.env.PORT || 4000
const routes = require("./routes")

App.use("/", routes)

App.get("*", (req, res) => {
    res.send("digite rota válida")
})

App.listen(port, () => console.log("Running"))