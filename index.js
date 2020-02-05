// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Local modules
const Configs = require('./const');
const items = require('./routes/item_routes');
const tickes = require('./routes/ticket_routes');

// General configs
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 4200;
var rootPath = __dirname;

const apiRoot = '/api/v1';

// Db config
mongoose.connect(Configs.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDb Connected'))
    .catch((err) => console.log(err));

// Home route
app.get('/', (req, res) => {
    res.status(200).sendfile(rootPath + '/views/index.html')
});

// Api routes
app.use(`${apiRoot}/items/`, items);
app.use(`${apiRoot}/tickets/`, tickes);

// Server
app.listen(PORT, () => {
    console.log(`Server up, listen port: ${PORT}`);
});

