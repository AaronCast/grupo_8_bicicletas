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
    }
}


module.exports = usersController