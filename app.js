const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

const publicPath= path.resolve(__dirname,'./public') ;
app.use(express.static(publicPath));


/* Home page */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/index.html'));
});


/* ProductCar */
app.get('/productdetail', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/productDetail.html'));
});

/* Login */
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'));

/* Formulario Registro */
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/register.html'));
});
/* Carrito de Compras */
app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/productCart.html'));
});

app.listen(3030, () => 
console.log('Corriendo'));
