const express = require('express');
const { index } = require('../controllers/indexController');
const router = express.Router();

const indexController = require('../controllers/indexController');
const guestMiddleware = require('../middlewares/guestMiddleware');


router.get('/', indexController.index);
router.get('/login', guestMiddleware, indexController.login);
router.get('/register', guestMiddleware, indexController.register);
router.get('/productCar', indexController.productCar)
router.get('/search', indexController.search);

module.exports = router;