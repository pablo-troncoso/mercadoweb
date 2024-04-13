const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// Fontawesome
app.use('/fontawesome', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free')));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// Bootstrap
app.use('/bootstrap-css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));

// Bootstrap JS
app.use('/bootstrap-js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

// jQuery
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));


//Handlebars config.
app.engine('handlebars', engine({
    defaultLayout: 'main',
    layoutsDir: 'views/'
}));

app.set('view engine', 'handlebars');
app.set('views', './views');

// Productos
app.get('/', (req, res) => {
    const productos = ['plátano', 'cebollas', 'pimentón','papas', 'lechuga', 'tomate'];
    res.render('main', { productos });
});

// Servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});