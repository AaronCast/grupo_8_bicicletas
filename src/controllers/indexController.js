const fs = require('fs');
const path = require('path');

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

const productList = [
    {
        id:1,
        productName:'Nombre del producto',
        model: 'Modelo 097907',
        price: '$ 12,000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci? Deserunt laborum dolore sint impedit ullam at soluta a. Ipsa quo inventore eum? Assumenda quod aspernatur tempore et, mollitia doloremque.',
        img: 'product-1.jpg'
    },
    {
        id:2,
        productName:'Nombre del producto',
        model: 'Modelo 095447',
        price: '$ 9,000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci? Deserunt laborum dolore sint impedit ullam at soluta a. Ipsa quo inventore eum? Assumenda quod aspernatur tempore et, mollitia doloremque.',
        img: 'product-2.jpg'
    },
    {
        id:3,
        productName:'Nombre del producto',
        model: 'Modelo 876907',
        price: '$ 14,300',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci? Deserunt laborum dolore sint impedit ullam at soluta a. Ipsa quo inventore eum? Assumenda quod aspernatur tempore et, mollitia doloremque.',
        img: 'product-3.jpg'
    },
    {
        id:4,
        productName:'Nombre del producto',
        model: 'Modelo 453207',
        price: '$ 2,000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci? Deserunt laborum dolore sint impedit ullam at soluta a. Ipsa quo inventore eum? Assumenda quod aspernatur tempore et, mollitia doloremque.',
        img: 'product-4.jpg'
    },
    
];

const indexController = {
    index: (req, res) => {
        res.render('index', {newProduct, toThousand});
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