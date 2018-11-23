// We’ll declare all our dependencies here
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//Initialize our app variable
const app = express();

//Declaring Port
const port = 3000;

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});
// Connect mongoose to our database
const config = require('./config/database');
mongoose.connect(config.database);

const BookRouter = require('./routes/route');
const UserRouter = require('./routes/UserRouter');
const CardRouter = require('./routes/CardRouter');
app.use('/books',BookRouter);
app.use('/user',UserRouter);
app.use('/cards',CardRouter);