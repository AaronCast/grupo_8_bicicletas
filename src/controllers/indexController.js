const productList = [
    {
        id:1,
        productName:'Nombre del producto',
        model: 'Modelo 097907',
        price: '$ 12,000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci? Deserunt laborum dolore sint impedit ullam at soluta a. Ipsa quo inventore eum? Assumenda quod aspernatur tempore et, mollitia doloremque.',
        img: 'product-1.jpg'
    },
    {
        id:2,
        productName:'Nombre del producto',
        model: 'Modelo 095447',
        price: '$ 9,000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci? Deserunt laborum dolore sint impedit ullam at soluta a. Ipsa quo inventore eum? Assumenda quod aspernatur tempore et, mollitia doloremque.',
        img: 'product-2.jpg'
    },
    {
        id:3,
        productName:'Nombre del producto',
        model: 'Modelo 876907',
        price: '$ 14,300',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci? Deserunt laborum dolore sint impedit ullam at soluta a. Ipsa quo inventore eum? Assumenda quod aspernatur tempore et, mollitia doloremque.',
        img: 'product-3.jpg'
    },
    {
        id:4,
        productName:'Nombre del producto',
        model: 'Modelo 453207',
        price: '$ 2,000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci? Deserunt laborum dolore sint impedit ullam at soluta a. Ipsa quo inventore eum? Assumenda quod aspernatur tempore et, mollitia doloremque.',
        img: 'product-4.jpg'
    },
    
];



const indexController = {
    index: (req, res) => {
        res.render('index', {productList: productList});
    },
    login: (req, res) =>{
        res.render('login');
    },
    details: (req, res) => {
        let product = productList.find(product => product.id == req.params.id);
        console.log(product);
        res.render('productDetail', {product:product});
    },
    create: (req, res) =>{
        let newProduct = {
            nombre: req.body.name,
            model: req.body.model
        }
        console.log(req.body)
        res.render('createProduct');
    },
    register: (req, res) =>{
        res.render('register');
    },
    productCar: (req, res) =>{
        res.render('productCart');
    }
};

module.exports = indexController;