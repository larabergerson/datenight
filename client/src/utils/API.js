import Axios from 'axios';

export default {
  findAllYelp: function () {
    //DO yelp stuff
    return Axios.get('/api/yelp')
    
  },

  saveYelp: function (id) {
    //axios post('/api/saved')
    //then res.send(success)
  },

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