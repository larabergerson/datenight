// dependencies:
const express = require('express');
const mongoose = require('mongoose');

// imports:
const routes = require('./routes');

// express:
const app = express();

// set port
const PORT = process.env.PORT || 3001;

// configure body parsing for AJAX requests (aka Middleware)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve statis assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

// add routes, just API
app.use(routes);

const eats_DB = 'clientFaves'

// connect to mongoose db
mongoose.connect(
    process.env.MONGOD_URI || `mongodb://localhost/${eats_DB}`,
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

// SERVER LISTENER:
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost/${PORT}`);
});