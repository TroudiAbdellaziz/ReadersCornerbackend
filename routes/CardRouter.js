//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();

const Card = require('../models/card');

router.post('/getCard', (req, res) => {
    console.log("here22");
    let data=req.body;
    console.log(data);
    Card.find({cardNum:data.cardNum},{expiration:data.expiration},{cvCode:data.cdCode},(err, card) => {
        if (err) {
            
            res.json({ success: false, message: `Failed to load card. Error: ${err}` });
        }
        else if((!card)||(card.length==0)){
            res.json({ success: false, message: `card not found` });
        }else{
            console.log(card);
            res.write(JSON.stringify({ success: true, card: card }, null, 2));
            res.end();
        }
    });
});

//GET HTTP method to /bucketlist
router.get('/', (req, res) => {
    res.send("GET");
});

//POST HTTP method to /bucketlist



//DELETE HTTP method to /bucketlist. Here, we pass in a params which is the object id.
router.delete('/:id', (req, res, next) => {
    res.send("DELETE");

})


module.exports = router;