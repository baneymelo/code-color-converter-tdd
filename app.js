const express = require('express');
const app = express();
const Converter = require('./Converter');
const validate = require('./validate');


app.use(express.json())

app.post('/rgb' , (req, res) => {
    const { code } = req.body;

    const len = validate.length(code)
    if(!len) res.status(400).send({err: "Too long"})

    const format = validate.format(code)
    if(!format) res.status(400).send({err: "Incorrect"})

    const color = new Converter(code);
    const hex = color.toHex();

    res.status(200).send({ hex })
    
})

app.post('/hex', (req, res) => {
    const { code } = req.body;

    const len = validate.length(code)
    if(!len) res.status(400).send({err: "Too long"})

    const format = validate.format(code)
    if(!format) res.status(400).send({ err: "Incorrect"})

    const color = new Converter(code)
    const rgb = color.toRgb()

    res.status(200).send({rgb})
})

module.exports = app;