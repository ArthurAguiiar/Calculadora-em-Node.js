const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const operacoes = require('./operacoes.js');
const ejs = require('ejs');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.post('/calcular', (req, res) => {
  operacoes.calculadora(req.body.num1, req.body.num2, req.body.operador)
  res.render('index', {
    messagem: 'Calculo realizado com sucesso!!'
  });
});

app.get('/', (req, res) => {
  res.render('index');
})

const port = 8080;

app.listen(port, () => {
  console.log('Server running on port${port}');
});
