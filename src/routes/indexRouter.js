const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
router.get('/', indexController.index);
router.get('/login', indexController.login);
router.get('/details/:id', indexController.details);
router.get('/create-product', indexController.create);
router.put('/create-product', indexController.create);

module.exports = router;