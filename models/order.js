//Require mongoose package
const mongoose = require('mongoose');

//Define BucketlistSchema with title, description and category
const OrderSchema = mongoose.Schema({
    user: String,
    books: [String],
    price: String,
    sent: Boolean,
    booksNames:[String],
    userName: String,
    address: String
});
const  Order = module.exports = mongoose.model(' Order',  OrderSchema );

module.exports.getAllOrders = (callback) => {
    Order.find(callback);
}


