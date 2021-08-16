const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('public'));

/* Home page */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/index.html'));
});


/* ProductCar */
app.get('/productdetail', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/productDetail.html'));
});



app.listen(3030, () => 
console.log('Corriendo'));
