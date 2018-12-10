
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();


const port = 3000;


app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});

const config = require('./config/database');
mongoose.connect(config.database);

const BookRouter = require('./routes/route');
const UserRouter = require('./routes/UserRouter');
const CardRouter = require('./routes/CardRouter');
const OrderRouter = require('./routes/OrderRouter');
app.use('/books',BookRouter);
app.use('/user',UserRouter);
app.use('/cards',CardRouter);
app.use('/orders',OrderRouter);