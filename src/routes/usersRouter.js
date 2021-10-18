const express = require('express');
const router = express.Router();
const multer = require('multer');
const {body} =require('express-validator');
const path = require('path');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const usersController = require('../controllers/usersController');
const validateLogin = [
    body('email').isEmail().withMessage('Ingresa tu email'),
    body('password').notEmpty().withMessage('Contraseña')
]

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
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', validateLogin, usersController.processLogin);
router.get('/user/profile', authMiddleware, usersController.profile);
router.get('/logout', usersController.logout);





module.exports = router;