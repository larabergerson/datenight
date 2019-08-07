let keys = require ("../../src/keys")
var Yelp = require('yelpv3');
// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
// var yelp = new Yelp({
//   app_id: keys.client,
//   app_secret: keys.key
// });
// https://www.yelp.com/developers/documentation/v3/business_search
yelp.search({term: 'food', location: 'chicago', limit: 10})
.then(function (data) {
    console.log(data);
})
.catch(function (err) {
    console.error(err);
});