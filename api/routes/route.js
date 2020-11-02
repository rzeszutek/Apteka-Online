const express = require('express');
const router = express.Router();
const Element = require('../models/elements');

//list retrieving
router.get('/', (req, res) => {
    res.send('Get.');
});

//add element
router.post('/element', (req, res, next) => {
    let newElement = new Element({
        id: req.body.id,
        name: req.body.name
    })

    newElement.save((err, element) => {
        if(err){
            res.json({msg: 'Failed to add element.'})
        }
        else {
            res.json({msg: 'Element added.'});
        }
    });
});

//delete element
router.delete('/element/:id', (req, res, next) => {
    Element.remove({id: req.params.id}, function (err ,result) {
        if(err){
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

module.exports = router;
