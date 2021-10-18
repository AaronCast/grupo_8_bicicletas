const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');


getUsers = fs.readFileSync(usersFilePath, 'utf-8');
console.log(getUsers);