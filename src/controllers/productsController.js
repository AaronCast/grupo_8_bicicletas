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
        res.render('details', {product:product, toThousand});
    },
    viewCreate: (req, res) =>{
        res.render('createProduct');
    }, 
    create: (req, res) => {
        let image
        console.log(req.files);
        if(req.files[0] != undefined){
            image = req.files[0].filename
        } else{
            image = 'default-img.png'
        };
        let newProduct = {
            ...req.body,
            image: image,
            id: products[products.length - 1].id +1
        };
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        res.redirect('/');
    }
}


module.exports = productsController