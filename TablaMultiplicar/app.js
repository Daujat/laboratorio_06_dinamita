const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/multiplicar/:numero', (req, res) => {
    const numero = parseInt(req.params.numero);
    if (isNaN(numero)) {
        res.status(400).send('Número no válido');
        return;
    }
    res.render('index', { numero });
});

app.get('/multiplicar-pug/:numero', (req, res) => {
    const numero = parseInt(req.params.numero);
    if (isNaN(numero)) {
        res.status(400).send('Número no válido');
        return;
    }
    res.render('index', { numero });
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});