const mongoose = require('mongoose');

const ElementSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const Element = module.exports = mongoose.model('Element', ElementSchema);


