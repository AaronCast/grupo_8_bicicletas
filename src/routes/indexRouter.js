const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
router.get('/', indexController.index);
router.get('/login', indexController.login);
router.get('/details/:id', indexController.details );

module.exports = router;