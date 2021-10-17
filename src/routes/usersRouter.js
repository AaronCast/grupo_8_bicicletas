const express = require('express');
const router = express.Router();
const multer = require('multer');
const {check} =require('express-validator');
const path = require('path');

const usersController = require('../controllers/usersController');
const validateLogin = [
    check('email').isEmail().withMessage('Ingresa tu email'),
    check('password').notEmpty().withMessage('Contraseña')
];

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/img/usuarios');
    },
    filename: function(req,file,cb){
        console.log(file);
        const newUserName = file.fieldname + Date.now() + path.extname(file.originalname);
        cb(null, newUserName);
    }
});

const upload = multer({storage: storage});

router.put('/create-user', upload.any() , usersController.create);
router.get('/login', usersController.login);
router.post('/login', validateLogin, usersController.processLogin);




module.exports = router;