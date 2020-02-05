const express = require('express');
const itemRouter = express.Router();
const item = require('../models/item_model');

// Create
itemRouter.post('/createItem', (request, response) => {
    
    const {name, price, count} = request.body;
        
    const newItem = new item({
        name,
        price,
        count
    });

    newItem.save((err, item) => {
        err 
        ? response.status(409).send(err) 
        : response.status(201).send(item._id)
    });

});

// Read all items
itemRouter.get(['/', '/getItems'], (request, response) => {
    item.find((err, res) => {
        err
        ? response.status(404).send(err)
        : response.status(200).send(res)
    });  
});

// Read item by id
itemRouter.get('/getItemById', (request, response) => {
    const {id} = request.query;
    item.findById(id, (err, res) => {
        err
        ? response.status(404).send(err)
        : response.status(200).send(res)
    });  
});

// Update item by id
itemRouter.put('/updateItemById', (request, response) => {
    
    const {id} = request.query;
    const {name, price, count} = request.body;
    
    if (Object.keys(request.body).length !== 3) {
        response.status(400).send('Bad request');
    }

    item.findByIdAndUpdate(id, {
        name,
        price,
        count
    }, (err, res) => {
        err
        ? response.status(304).send(err)
        : response.status(202).send(res._id)
    });
});


// patch movie by id
itemRouter.patch('/patchItemById', (request, response) => {
    
    const {id} = request.query;
    const {name, price, count} = request.body;
    
    if (Object.keys(request.body).length > 0 && Object.keys(request.body).length <= 3) {
        response.status(400).send('Bad request');
    }

    item.findByIdAndUpdate(id, {
        name,
        price,
        count
    }, (err, res) => {
        err
        ? response.status(304).send(err)
        : response.status(202).send(res._id)
    });
});

// Delete movie by id
itemRouter.delete('/deleteItemById', (request, response) => {
    const {id} = request.query;
    
    if (id === null){
        response.status(400).send()
    }

    item.findByIdAndDelete(id, (err, res) =>{
        err
        ? response.status(404).send(err)
        : response.status(204).send()
    });

});

module.exports = itemRouter;