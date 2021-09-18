const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const productsController = require('../controllers/productsController');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/img/products');
    },
    filename: function(req,file,cb){
        console.log(file);
        const newProductName = file.fieldname + Date.now() + path.extname(file.originalname);
        cb(null, newProductName);
    }
});

const upload = multer({storage: storage});


router.get('/', productsController.index);
router.get('/products', productsController.index);
router.get('/detail/:id', productsController.details);
router.get('/create-product', productsController.viewCreate);
router.put('/create-product', upload.any() , productsController.create);


module.exports = router;