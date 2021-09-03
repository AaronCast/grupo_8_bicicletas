const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const productsController = require('../controllers/productsController');

router.get('/', indexController.index);
router.get('/login', indexController.login);
router.get('/details/:id', indexController.details);
router.get('/create-product', indexController.viewCreate);
router.put('/create-product', productsController.create);
router.get('/register', indexController.register);
router.get('/productCart', indexController.productCar)

module.exports = router;