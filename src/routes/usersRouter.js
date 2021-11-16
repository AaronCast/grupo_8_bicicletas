const express = require('express');
const router = express.Router();
const multer = require('multer');
const {body} =require('express-validator');
const path = require('path');

const usersController = require('../controllers/usersController');

const uploadFileRegister = require('../middlewares/multerRegisterMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


router.put('/create-user',uploadFileRegister.any('image'), validations, usersController.create);
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.processLogin);
router.get('/user/profile', authMiddleware, usersController.profile);
router.get('/logout', usersController.logout);





module.exports = router;