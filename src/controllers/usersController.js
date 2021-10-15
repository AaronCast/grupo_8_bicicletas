const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const usersController = {
    create: (req, res) => {
        let image
        console.log(req.files);
        if(req.files[0] != undefined){
            image = req.files[0].filename
        } else{
            image = 'default-img.png'
        };
        let newUser = {
            ...req.body,
            image: image,
            id: users[users.length - 1].id +1
        };
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
        res.redirect('/');
    }, 
    login: (req, res) => {
        return res.render('login.ejs')
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
        let userLog
        if(errors.isEmpty()){
            for(let i = 0; i< users.length; i++){
                if(users[i].email == req.body.email){
                    if(bcrypt.compareSync(req.body.password, users[i]. password)){
                        let userLog = users[i];
                        break;
                    }
                }
            }
            if(userLog == undefined){
                return res.render('login', {errors: [{msg: 'Credenciales inválidads'}
                ]
                });
            }
            req.session.userlogued = userLog;
            res.send('Bien hecho');
        }else{
            return res.render('login', {errors: errors.errors});
        }
    }
}


module.exports = usersController