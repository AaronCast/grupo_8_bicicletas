const fs = require('fs');
const db = require('../database/models');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const path = require('path');
const User = require('../database/models/User');
// const User = require('../model/UserJSON');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const Users = db.User;

const usersController = {
    create: (req, res) => {
       
        const resultValidation = validationResult(req);
        console.log(resultValidation);

        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

         Users.findAll({
             where: {email: req.body.email}
         })
         .then(() => {
             return res.render('register', {
                 errors: {
                 email: {
                       msg: "Email registrado"
                     }},
                    oldData: req.body
             });
        })

        // let userInDB = Users.findByField('email', req.body.email);
    
        // if (userInDB) {
        //     return res.render('register', {
        //         errors: {
        //         email: {
        //             msg: 'Este email ya está registrado'
        //         }},
        //             oldData: req.body
        //         });
        // }
        req.file ? userImage = req.file.filename : userImage = "default-user.png";
        Users.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            license: req.body.category,
            image: userImage
        })
        .then(() => {
            console.log(req.file)
            return res.redirect('/')
        })
        .catch(error => res.send(error))
        // let image
        // let userToCreate = {
        //     ...req.body,
        //     password: bcrypt.hashSync(req.body.password, 10),
        //     image: image
        // }
        
        // if(req.files !== undefined){
        //     image = req.file.filename
        // } else{
        //     image = 'default-img.png'
        // };
        // let userCreated = User.create(userToCreate);
          
        // return res.redirect('/login');
    }, 
    login: (req, res) => {
        return res.render('login.ejs');
        
    },
    processLogin: (req, res) => {

       
        
        let email = req.body.email;
        let password = req.body.password;

        Users.findOne({
            where: {email: email}
        })
        .then(userToLog => {
            console.log(userToLog);
            if(userToLog == null){
                res.render('login.ejs', {email: {msg: 'Correo no registrado'}}
            )
        }else{
            let validPassword = bcrypt.compareSync(password, userToLog.password);
            console.log(validPassword)
            if(!validPassword){
                res.render('login.ejs', {password: {msg: 'Contraseña Incorrecta'}}
                )
            }else{
                req.session.userLogged = userToLog;
                delete userToLog.password;
                if(req.body.remenber){
                    res.cookie('userEmail', userToLog.email, {maxAge: (1000 * 60) * 10})
                }
                return res.redirect('/');

            }
        }
        })
        .catch(error => res.send(error))

           
            // return res.render('/login', {
            //     errors: {email: {msg: 'Credenciales Inválidas'}}
            // })




        // let userToLog = users.find(user => user.email == req.body.email);
       
        // if(userToLog){
        //     let validPassword = bcrypt.compareSync(req.body.password, userToLog.password);
        //     if(validPassword){
        //         delete userToLog.password;
        //         req.session.userLogged = userToLog;
        //         if(req.body.remember){
        //             res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 10  })

        //         }

        //         return res.redirect('user/profile');
        //     }
        //     return res.render('login', {
        //     errors: {email: {msg: 'Credenciales Inválidas'}}
        //     });
        // }
        

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