const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './public/img/usuarios');
    },
    filename: function(req,file,cb){
        const fileName = file.fieldname + Date.now() + path.extname(file.originalname);
        cb(null, fileName);
        console.log(file)
    }
});

const uploadFileRegister = multer({storage: storage});

module.exports = uploadFileRegister;