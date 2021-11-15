const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './public/img/products');
    },
    filename: function(req,file,cb){
        console.log(file);
        const imgName = file.fieldname + Date.now() + path.extname(file.originalname);
        cb(null, imgName);
    }
});

const uploadFile = multer({storage: storage});

module.exports = uploadFile;