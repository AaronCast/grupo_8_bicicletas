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
router.get('/product/detail/:id', productsController.details);
router.get('/product/create', productsController.viewCreate);
router.put('/product/create', upload.any() , productsController.create);
router.get('/product/edit/:id', productsController.edit);
router.put('/product/update/:id', upload.any(), productsController.update);
router.get('/product/delete/:id', productsController.delete);
router.delete('/product/delete/:id', productsController.destroy);




module.exports = router;