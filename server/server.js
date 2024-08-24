const dotenv = require('dotenv').config();
const express = require("express");
const app = express();
const connectDb = require("./utils/db");
const cors = require("cors");
const orderRouter = require('./router/order-router');
const authRouter = require('./router/auth-router');
const productRouter = require('./router/product-router');
const cartRouter = require('./router/cart-router');
const reviewrouter = require('./router/review-router');


const multer  = require('multer')
const path = require('path');
const { Product } = require('./models/product-model');


// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.static('public'))





const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/Images")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
 
});

const upload = multer({ storage: storage });


app.use(express.urlencoded({extended:false}));   //used to pass form data





// Mounting routers
app.use('/', authRouter);
app.use('/orders', orderRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.use('/review', reviewrouter);





app.post("/upload",upload.single("file"),(req,res)=>{

    res.status(200).json({data:req.file.filename})
})


app.get("/getImage",(req,res)=>{
    Product.find()
    .then((productimg)=>res.json(productimg))
    .catch((err)=>res.json(err))

})



const PORT = 4001; // Use process.env.PORT if available, otherwise default to 4001

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}`);
    });
});
