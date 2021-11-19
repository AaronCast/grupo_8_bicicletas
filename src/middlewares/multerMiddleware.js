const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './public/img/products');
    },
    filename: (req,file,cb) => {
        const fileName = file.fieldname + Date.now() + path.extname(file.originalname);
        cb(null, fileName);
        console.log(file)
    }
});

const uploadFile = multer({storage: storage});

module.exports = uploadFile;