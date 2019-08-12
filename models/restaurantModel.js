const mongoose = require('mongoose');
const schema = mongoose.Schema;

const yelpSchema = new Schema({
    name: {
        type: String,
        required= true
    },
    location: {
        type: String, 
        required: true
    }
    // url: {
    //     type: String,
    //     required: true
    // }
});

const Restaurants = mongoose.model('Restaurants', yelpSchema);

module.exports = Restaurants;

