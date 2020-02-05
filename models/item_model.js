// General imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const itemSchema = new Schema({
    itemId: ObjectId,
    name : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    count: {
        type: Number,
        default: 0
    }
});

const Item = mongoose.model('Items', itemSchema);
module.exports = Item;
