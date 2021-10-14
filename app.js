const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

/* Rutas */
const indexRouter = require('./src/routes/indexRouter');
const productsRouter = require('./src/routes/productsRouter');
const usersRouter = require('./src/routes/usersRouter');

app.use('/', indexRouter);
app.use('/',productsRouter);
app.use('/',usersRouter);

app.use('/products', productsRouter);
app.use('/register', usersRouter);


//app.use((req, res, next) =>{
 //   res.status(404).render('ERROOOR!');
//});



app.listen(3000, () => 
console.log('Corriendo en el puerto 3000'));
