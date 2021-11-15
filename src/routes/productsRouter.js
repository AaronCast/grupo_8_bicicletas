const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

const uploadFile = require('../middlewares/multerMiddleware');

router.get('/', productsController.index);
router.get('/products', productsController.index);
router.get('/product/detail/:id', productsController.details);
router.get('/product/create', productsController.viewCreate);
router.put('/product/create', uploadFile.any('image') , productsController.create);
router.get('/product/edit/:id', productsController.edit);
router.put('/product/update/:id', uploadFile.any('image'), productsController.update);
router.get('/product/delete/:id', productsController.delete);
router.delete('/product/delete/:id', productsController.destroy);




module.exports = router;