//Require mongoose package
const mongoose = require('mongoose');

//Define BucketlistSchema with title, description and category
const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    LastName: String,
    email: String,
    orders: [String],
    password: String
});
const  User = module.exports = mongoose.model(' User',  UserSchema );

//BucketList.find() returns all the lists
module.exports.getAllBooks = (callback) => {
    Book.find(callback);
}

