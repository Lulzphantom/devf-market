const express = require('express');
const ticketRouter = express.Router();

ticketRouter.get('/', (request, response) => {
    response.status(200).send('Tickets');
});

module.exports = ticketRouter;