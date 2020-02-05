// General imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

// Imports schema
const itemSchema = require('./item_model')

// Schema
const ticketSchema = new Schema({
    ticketId: ObjectId,
    subTotal : {
        type: Number,
        required: true
    },
    iva: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    items: {
        type: [itemSchema],
        required: true
    }
});

const Ticket = mongoose.model('Tickets', ticketSchema);
module.exports = Ticket;
