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
//var query = "https://api.yelp.com/v3/businesses/search"
var query = `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=chicago`;
export default {
    restaurantApi: axios.get(query, {
        headers: {
            Authorization: `Bearer eD7cxOSpnXgM3AfC8B8eDXS6La1cCMEc7a7TXkjTvjdiwAsyCsdM_GDr1U7JT1PwKsSMBJW1W8-5gS5bCfVX1H6yAkxdnyrBvf-4e1P7pBtHJiJOo8nqgWIcqklMXXYx`
        },
        params: {
            location: "chicago",
            categories: "dinner",
        }
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log('error')
            })
        
    })
}

