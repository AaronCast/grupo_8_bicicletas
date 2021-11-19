const fs = require('fs');
const db = require('../database/models');
const path = require('path');

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
        Products.findAll()
        .then(()=> {
            return res.render('createProduct');
        })
        .catch(error => res.send(error))
    }, 
    create: (req, res) => {
        Products.create({
            name: req.body.name,
            model: req.body.model,
            category: req.body.category,
            status: req.body.status,
            colors: req.body.colors,
            price: req.body.price,
            discount: req.body.discount,
            image: req.file.filename,
            description: req.body.description,
            size: req.body.size,
            brand: req.body.brand
        })
        .then(()=> {
           
            console.log(req.file)
            return res.redirect('/');
        })
        .catch(error => res.send(error))
      
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
                brand: req.body.brand
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
    delete: (req, res) => {
        let productId = req.params.id;
        Products.findByPk(productId)
        .then((product) => {
            return res.render('delete.ejs', {product})
        })
        .catch(error => res.send(error))

    },
    destroy: (req, res) => {
        let productId = req.params.id;
        Products.destroy({where: {id: productId}, force: true})
        .then(() => {
            return res.redirect('/')
        })
        .catch(error => res.send(error))
        
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