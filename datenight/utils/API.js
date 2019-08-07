import axios from "axios";

export default {
  restaurants: function (query) {
    return
    //https://www.yelp.com/developers/documentation/v3/business_search
   restaurants: yelp.search({term: 'food', location: 'chicago', limit: 10})
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.error(err);
    });
  }
}