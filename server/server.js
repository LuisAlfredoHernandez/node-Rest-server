require('./config/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.json("Hola mundo")
})

app.get('/usuario', (req, res) => {
    res.json("Hola mundo")
})

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id
    res.json({ id: id })
})

app.post('/usuario/', (req, res) => {
    if (req.body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            message: "El nombre es requerido!"
        })
    } else {
        let body = req.body;
        res.json({ usuario: body })
    }
})

app.delete('/', (req, res) => {
    res.json("delete Hola mundo")
})



app.listen(process.env.PORT, () => {
    console.log(`Escuchando en puerto ${process.env.PORT}`);
})