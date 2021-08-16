const express = require('express');
const path = require('path');

const app = express();
const publicPath= path.resolve(__dirname,'./public') ;
app.use(express.static(publicPath));



/* Home page */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/index.html'));
});
/* Home page */
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/register.html'));
});


app.listen(3030, () => 
console.log('Corriendo'));
