// dependencies:
const mongoose = require('mongoose');

// schema instance:
const Schema = mongoose.Schema;

// new Schema = Restaurant Starred -- what info do you want to pull from API to load into DB? Restaurant Name, Location, URL
const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
    
});

const Food = mongoose.model('Food', foodSchema);

// module expors:
module.exports = Food;

