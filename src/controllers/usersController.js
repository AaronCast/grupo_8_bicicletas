const fs = require('fs');
const db = require('../database/models');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const usersController = {
    create: (req, res) => {
       
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        
        let userInDB = db.User.findByField('email', req.body.email);
    
        if (userInDB) {
            return res.render('register', {
                errors: {
                email: {
                    msg: 'Este email ya está registrado'
                }},
                    oldData: req.body
                });
        }
            
        let image
        console.log(req.files);
        
        if(req.files[0] != undefined){
            image = req.files[0].filename
        } else{
            image = 'default-img.png'
        };
        let newUser = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            image: image,
            id: users[users.length - 1].id +1
        };
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
        res.redirect('/login');
    }, 
    login: (req, res) => {
        return res.render('login.ejs');
        
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
        console.log(errors);

        let userToLog = users.find(user => user.email == req.body.email);
       
        if(userToLog){
            let validPassword = bcrypt.compareSync(req.body.password, userToLog.password);
            if(validPassword){
                delete userToLog.password;
                req.session.userLogged = userToLog;
                if(req.body.remember){
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 10  })

                }

                return res.redirect('user/profile');
            }
            return res.render('login', {
            errors: {email: {msg: 'Credenciales Inválidas'}}
            });
        }
        

        // if(errors.isEmpty()){
        //     for(let i = 0; i< users.length; i++){
        //         if(users[i].email == req.body.email){
        //             if(bcrypt.compareSync(req.body.password, users[i]. password)){
        //                 let userLog = users[i];
        //                 break;
        //             }
        //         }
        //     }
        //     if(userLog == undefined){
        //         return res.render('login', {errors: [{msg: 'Credenciales inválidads'}
        //         ]
        //             });
        //     }
        //     req.session.userlogued = userLog;
        //     res.send('Bien hecho');
        // }else{
        //     return res.render('login', {errors: errors.errors});
        // }
    },
    profile: (req, res) => {
        res.render('userProfile', {
            user: req.session.userLogged
        });
        console.log(req.cookies.userEmail);
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
       

}


module.exports = usersController