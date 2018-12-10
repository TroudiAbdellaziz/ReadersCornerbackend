
const express = require('express');
const router = express.Router();

const Book = require('../models/book');
const User = require('../models/user');

router.post('/user', (req, res) => {
    User.create((req.body), (err, res) => {
        if (err) {
            return ({ success: false, message: `Failed to add the book. Error: ${err}` });

        }
        else {
            return ({ success: true });

        }
    });

});
router.post('/login', (req, res) => {

    User.findOne(
        {
            email: req.body.email
        }, (err, user) => {
            if (err) {

              res.json({ success: false, message: `Technical error.` });

            }
            else if (!user) {

                res.json({ success: false, message: 'user not found' });
            }
            else {
                if (user.password != req.body.password) {
                    res.json({ success: false, message: 'wrong password' });
                } else {
                    res.json({ success: true, user: user });
                }
            }

        });

});
router.post('/checkPassAndChange', (req, res) => {
    User.findOne({ password: req.body.password }, { id: req.body.id }, (err, user) => {
        if (!user) {

            res.json({ status: false, message: `Failed to check password. Error` });

        }

        else {

            user.password = req.body.newpassword;
            user.save();
            res.json({ status: true });

        }

    });
});
router.post('/signup', (req, res) => {

    let user = { firstName: req.body.fname, lasname: req.body.lname, password: req.body.password, email: req.body.email }
    User.create(user, (err, user) => {
        if (err) {
            console.log(err);
            res.json({ success: false, message: `Failed to signin. Error: ${err}` });

        }

        else {

            res.json({ success: true, user: user });
        }
    }

    );

});

module.exports = router;