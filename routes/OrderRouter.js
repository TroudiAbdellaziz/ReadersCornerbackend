//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();

const Book = require('../models/book');
const User = require('../models/user');
const Order = require('../models/order')
router.post('/order', (req, res) => {
    Order.create((req.body), (err, res) => {
        if (err) {
            console.log(err);
             return ({ success: false, message: `Failed to add the order. Error: ${err}` });

        }
        else {
            console.log("doone");
             return({ success: true });

        }
    });

});
router.get('/getOrderById/:id', (req, res) => {
    console.log("here");
    var id = req.params.id;
    Order.findById(id,(err, order) => {
        if (err) {
            res.json({ success: false, message: `Failed to load order. Error: ${err}` });
        }
        else {
            console.log(order);
            res.write(JSON.stringify({ success: true, order: order }, null, 2));
            res.end();
        }
    });
});

router.get('/getOrders', (req, res) => {
    Order.getAllOrders((err, lists) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all lists. Error: ${err}` });
        }
        else {
            res.write(JSON.stringify({ success: true, lists: lists }, null, 2));
            res.end();
        }
    });
});

module.exports = router;