const fs = require('fs');
const path = require('path');
const db = require('../database/models');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const Products = db.Product;

const productsController = {
    index: (req, res) => {
        Products.findAll()
        .then((products) => {
            res.render('products', {products:products})
        })
    },
    details: (req, res) => {
        let productId = req.params.id;
        Products.findByPk(productId)
        .then((product) => {
            res.render('details.ejs', {product:product})
           console.log(product)
        })
        
    },
    viewCreate: (req, res) =>{
        res.render('createProduct');
    }, 
    create: (req, res) => {
        db.Products.create({
            name: req.body.name,
            model: req.body.model,
            category: req.body.category,
            status: req.body.status,
            colors: req.body.colors,
            price: req.body.price,
            discount: req.body.discount,
            image: req.body.image,
            description: req.body.description,
            size: req.body.size,
        })
        .then(()=> {
            if(req.files[0] != undefined){
                image = req.files[0].filename
            } else{
                image = 'default-img.png'
            }
            res.redirect('/');
        })
      
    },
    edit: (req, res) => {
        let productId = req.params.id;
        Products.findByPk(productId)
        .then((productToEdit)=> {
            res.render('editProduct.ejs', {productToEdit});
        })
        .catch(error => res.send(error))
    },
    update: (req, res) => {
        let productId = req.params.id;
        Products.update(
            {
                name: req.body.name,
                model: req.body.model,
                category: req.body.category,
                status: req.body.status,
                colors: req.body.colors,
                price: req.body.price,
                discount: req.body.discount,
                image: req.body.image,
                description: req.body.description,
                size: req.body.size,
        },{where: {id: productId}})
        .then(()=> {
            // if(req.files[0] != undefined){
            //     image =req.files[0].filename
            // }else{
            //     image = 'default-img.png'
            // }
            return res.redirect('/')
        })
        .catch(error => res.send(error))       
    },
    destroy: (req, res) => {
        let id = req.params.id;
        let finalProducts = products.filter(product => product.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(finalproducts, null, ' '));
        res.redirect('/');
    }
    // numberVisits: function(req, res){
    //     if(req.session.numberVisit == undefined){
    //         req.session.numberVisit = 0;
    //     }
    //     req.session.numberVisit++;
    //     res.send('Visto' + req.session.numberVisit)
    // }
}


module.exports = productsController