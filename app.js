const express = require('express');
const app = express();
const db = require('./database/connection');
const Coffee = require('./models/Coffee');
const Review = require('./models/Review');
const morgan = require('morgan');
// Configuración para servir archivos estáticos desde el directorio 'public'
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', async (req, res) => {
    try {
        const reviews = await Review.find({});
        console.log(reviews)
        res.render('index', { reviews });
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener los cafés');
    }
});

app.post('/reviews', async (req, res) => {
    console.log(req.body);
    try {
        const review = new Review(req.body);
        await review.save();
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al crear el review');
    }
});

app.get('/about', (req, res) => {
    res.render('about', { nombre: 'Usuario Pug' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { nombre: 'Usuario Pug' });
});

app.get('/menu', async (req, res) => {
    try {
        const coffees = await Coffee.find({});
        console.log(coffees)
        res.render('menu', { coffees });
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener los cafés');
    }
});




app.engine('ejs', require('ejs').renderFile);

app.get('/reservation', (req, res) => {
    res.render('reservation.ejs', { nombre: 'Usuario EJS' });
});

app.get('/service', (req, res) => {
    res.render('service.ejs', { nombre: 'Usuario EJS' });
});

app.get('/testimonial', (req, res) => {
    res.render('testimonial.ejs', { nombre: 'Usuario EJS' });
});

app.listen(3000, () => {
    console.log('Servidor listening on port 3000');
});
