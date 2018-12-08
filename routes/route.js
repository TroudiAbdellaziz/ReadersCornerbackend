//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
var multer = require("multer");
const Book = require('../models/book');
const User = require('../models/user');
//GET HTTP method to /bucketlist
router.get('/getBooks', (req, res) => {
    Book.getAllBooks((err, lists) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all lists. Error: ${err}` });
        }
        else {
            res.write(JSON.stringify({ success: true, lists: lists }, null, 2));
            res.end();
        }
    });
});

router.get('/getBookById/:id', (req, res) => {
    console.log("here");
    var id = req.params.id;
    Book.findById(id,(err, book) => {
        if (err) {
            res.json({ success: false, message: `Failed to load book. Error: ${err}` });
        }
        else {
            console.log(book);
            res.write(JSON.stringify({ success: true, book: book }, null, 2));
            res.end();
        }
    });
});

//GET HTTP method to /bucketlist
router.get('/', (req, res) => {
    res.send("GET");
});

//POST HTTP method to /bucketlist

router.post('/book', (req, res) => {
    Book.findById(req.body.id, (err, book)=>{
        book.nbSales=req.body.num;
        book.save();
    })
    Book.create((req.body), (err, res) => {
        if (err) {
            return ({ success: false, message: `Failed to add the book. Error: ${err}` });

        }
        else {
            return ({ success: true });

        }
    });

});

//DELETE HTTP method to /bucketlist. Here, we pass in a params which is the object id.
router.delete('/:id', (req, res, next) => {
    res.send("DELETE");

})
router.get("/deleteBook/:id",(req,res)=>{

    let id=req.params.id;
    Book.findById(id,(err,res)=>{
        if (err) {
            return ({ success: false, message: `Failed to add the book. Error: ${err}` });

        }
        else {
            res.remove();
            return ({ success: true });

        }
    })
})
router.post("/addBook",multer({ dest: "/home/troudi/project/ReadersCorner/src/assets/images" }).array("uploads", 12), (req, res)=> {
    console.log("here");
    console.log(req.files);
    console.log(req.body);
    let data = req.body;
    data["picture"]=req.files.filename;
        Book.create((data), (err, res) => {
        if (err) {
            return ({ success: false, message: `Failed to add the book. Error: ${err}` });

        }
        else {
            console.log("here");
            return ({ success: true });

        }
    });
    res.send(req.files);

  });

module.exports = router;