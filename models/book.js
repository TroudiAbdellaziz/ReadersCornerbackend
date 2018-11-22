//Require mongoose package
const mongoose = require('mongoose');

//Define BucketlistSchema with title, description and category
const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    picture: String,
    price: Number,
    soldOut: Boolean,
    author: String,
    languages: {
    }
});
const Book = module.exports = mongoose.model('Book', BookSchema );

//BucketList.find() returns all the lists
module.exports.getAllBooks = (callback) => {
    Book.find(callback);
}

