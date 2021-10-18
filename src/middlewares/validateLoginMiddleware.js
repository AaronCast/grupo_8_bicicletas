const {body} =require('express-validator');

const validateLogin = [
    body('email').isEmail().withMessage('Ingresa tu email'),
    body('password').notEmpty().withMessage('Contraseña')
]


module.exports = validateLogin;