const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//routes
const adminRoutes = require('./routes/admin/auth');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');


//environnement variable
env.config();

// mongodb conection
//mongodb+srv://root:<password>@cluster0.emi4x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.emi4x.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
    {   //useNewUrlParser: true,
        useUnifiedTopology: true
    }
    ).then(() => {
         console.log('DataBase is connected !');
    
});

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
module.exports = app;