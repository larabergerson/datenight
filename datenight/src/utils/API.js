import axios from "axios";
import keys from "../keys";
const Yelp = require('yelpv3');
var yelp = new Yelp({
  app_id: process.env.REACT_APP_yelp_clientID,
  app_secret: process.env.REACT_APP_yelp_APIKey
});
// var yelp = new Yelp(keys.yelp);
export default {
  restaurantApi: function (query) {
    console.log(query);
    console.log("You clicked me!!!");
    console.log(keys);
      console.log("YO: " + keys.key);
    //https://www.yelp.com/developers/documentation/v3/business_search

    return yelp.search({term: 'food', location: '60610', limit: 10})
    .then(function (data) {
      console.log(data);
      
    })
    .catch(function (err) {
        console.error(err);
    });
  }
}