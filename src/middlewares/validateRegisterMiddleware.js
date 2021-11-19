const path = require('path');
const {body} = require('express-validator');

module.exports = [
    body('firstName').notEmpty().withMessage('Escribe tu nombre'),
    body('lastName').notEmpty().withMessage('Escribe tu apellido'),
    body('email').notEmpty().withMessage('Escribe tu correo electrónico').bail()
    .isEmail().withMessage('Revisa el formato de tu correo'),
    body('password').notEmpty().withMessage('Escribe una contraseña'),
]