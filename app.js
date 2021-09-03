const express = require('express');
const path = require('path');
const   methodOverride = require('method-override');
const app = express();


//Ruta de Index
const indexRouter = require('./src/routes/indexRouter');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

/* Home page */
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', indexRouter);
app.use((req, res, next) =>{
    res.status(404).render('ERROOOR!');
});



app.listen(3030, () => 
console.log('Corriendo'));
