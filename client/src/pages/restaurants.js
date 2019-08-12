import React, { Component } from "react";
import axios from 'axios';



class Restaurants extends Component {
  componentDidMount () {
    this.restaurantData();
    
}
  restaurantData = () => {
    var query = `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`;
    axios.get(query, {
      headers: {
        Authorization: `Bearer fxHF0fV_DIEH61vI9wY3AY2OW5CuJ5VP1LzPl_f6EBhoWaqTc_Iq284uKxXLZcE2NBpgtmlF1y0pugFhy1uTlXKJqIZtGwF2000AX0AbkzFyxfnzf37ZptOLeHNMXXYx`
      },
      params: {
            location: "chicago",
            categories: "dinner",
      }
    })
      .then((res) => {
        console.log(res);

        //Add responses into the state object, aka the array
        //Use .map to display results to screen
      });
  }


    render() {
      return (
        <div className="list-group restaurant">
          <a href="#" className="list-group-item list-group-item-action active">
            Suggested Restaurant for your date:
  </a>
          <a href="#" className="list-group-item list-group-item-action">blah</a>
          <a href="#" className="list-group-item list-group-item-action">blah</a>
          <a href="#" className="list-group-item list-group-item-action">blah</a>
          <a href="#" className="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">blah</a>
        </div>
      );
    };
  };

export default Restaurants