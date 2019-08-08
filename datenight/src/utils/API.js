// import axios from "axios";
// import keys from "../keys";
const yelp = require('yelp-fusion');

const apiKey = "eD7cxOSpnXgM3AfC8B8eDXS6La1cCMEc7a7TXkjTvjdiwAsyCsdM_GDr1U7JT1PwKsSMBJW1W8-5gS5bCfVX1H6yAkxdnyrBvf-4e1P7pBtHJiJOo8nqgWIcqklMXXYx"


const searchRequest = {
  term:'Four Barrel Coffeezzzzz',
  location: 'san francisco, ca'
};


// const client = yelp.client(apiKey);

// client.search(searchRequest).then(response => {
// //   const firstResult = response.jsonBody.businesses[0];
// //   const prettyJson = JSON.stringify(firstResult, null, 4);
// //   console.log(prettyJson);
// // }).catch(e => {
// //   console.log(e);
// });


export default {
  restaurantApi: function () {
    // client.search(searchRequest).then(response => {
    //   const firstResult = response.jsonBody.businesses[0];
    //   const prettyJson = JSON.stringify(firstResult, null, 4);
    //   console.log(prettyJson);
    // }).catch(e => {
    //   console.log(e);
    // });
  }
}