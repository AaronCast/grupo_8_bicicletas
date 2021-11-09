const fs = require('fs');
const path = require('path');
const db = require('../database/models');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const newProduct = products.filter(function(product){
    return product.status == "new"
});
//const bicycles
//const bamboocycles
//const rollerskate
//const skateboard
//const accessories
const inSale = products.filter(function(product){
    return product.category == 'in-sale'
});


const indexController = {
    index: (req, res) => {
        db.Product.findAll({where: {status:'new'}})
        .then((products) => {
            res.render('index.ejs', {products:products})
            console.log(products);
        })
    },
    login: (req, res) =>{
        res.render('login');
    },
    register: (req, res) =>{
        res.render('register');
    },
    productCar: (req, res) =>{
        res.render('productCart');
    },
    search: (req, res) => {
        let search = req.query.keywords;
        let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search));
        res.render('results', {products: productsToSearch, search})
    }
};

module.exports = indexController;