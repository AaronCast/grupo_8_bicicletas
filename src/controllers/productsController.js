const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productsController = {
    index: (req, res) => {
        res.render('products', {products: products, toThousand});
    },
    details: (req, res) => {
        let product = products.find(product => product.id == req.params.id);
        console.log(product);
        res.render('details', {product:product});
    },
    viewCreate: (req, res) =>{
        res.render('createProduct');
    }
}


module.exports = productsController