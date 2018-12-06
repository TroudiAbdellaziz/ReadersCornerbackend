//Require mongoose package
const mongoose = require('mongoose');

//Define BucketlistSchema with title, description and category
const CardSchema = mongoose.Schema({
   
    cardNum: String,
    expiration: String,
    cvCode: String,
});
const Card = module.exports = mongoose.model('Card', CardSchema );


