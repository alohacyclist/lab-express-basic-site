const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => response.render('index'));
app.get('/about', (request, response) => response.render('about'));
app.get('/photos', (request, response) => response.render('photos'));
app.get('/supporters', (request, response) => response.render('supporters'));


app.listen(5001, console.log('server running'))