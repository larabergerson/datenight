const keys = require('dotenv').config();
// console.log(keys);
// console.log(keys.parsed.Client_ID);

const client_id = (process.env.CLIENT_ID || keys.parsed.Client_ID);
const yelpAPI = process.env.YELP_API || keys.parsed.API_Key;
console.log(yelpAPI);

const yelp = require('yelp-fusion');
const client = yelp.client(yelpAPI);
// API_Key = ENV["Yelp_"]


const yelpController = {
    findAll: function (req, res) {
        client.search({
            term: "",
            location: "chicago, il",
        }).then(response => {
            console.log('success');
            console.log(response);
            console.log(response.jsonBody.businesses[0].name);
            res.json(response.jsonBody);
        }).catch(e => {
            console.log(e)
        });
        
    }
}

module.exports = yelpController;