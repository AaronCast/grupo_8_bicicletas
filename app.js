const express = require('express');
const path = require('path');
const app = express();

//Ruta de Index
const indexRouter = require('./src/routes/indexRouter');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

/* Home page */
app.use('/', indexRouter);


app.listen(3030, () => 
console.log('Corriendo'));
