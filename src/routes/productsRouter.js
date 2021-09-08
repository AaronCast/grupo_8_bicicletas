const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/', productsController.index);
router.get('/products', productsController.index);
router.get('/detail/:id', productsController.details);
router.get('/create-product', productsController.viewCreate);

module.exports = router;