//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();

const Card = require('../models/card');

router.post('/getCard', (req, res) => {
    let data=req.body;
    Card.find({cardNum:data.cardNum},{expiration:data.expiration},{cvCode:data.cdCode},(err, card) => {
        if (err) {
            
            res.json({ success: false, message: `Failed to load card. Error: ${err}` });
        }
        else if((!card)||(card.length==0)){
            res.json({ success: false, message: `card not found` });
        }else{
            res.write(JSON.stringify({ success: true, card: card }, null, 2));
            res.end();
        }
    });
});









module.exports = router;