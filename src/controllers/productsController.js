const fs = require('fs');

const productsController = {
    
    create: (req, res) => { 
        let product = {
            productName: req.body.name,
            model: req.body.model
        };
        //1. leer objetos existentes
        let productFile = fs.readFileSync("product.json", {encoding: 'utf-8'});
        //2. Crear lista    json -> objeto
        let products;
        if(productFile == " "){
            products = [ ];
        }else{
            products = JSON.parse(productFile);
        };
        products.push(product);
        //3. Empaquetar y guardar   texto ->JSON
        productsJSON = JSON.stringify(products);
        fs.writeFileSync('product.json', productsJSON);
    }, 
}
module.exports = productsController