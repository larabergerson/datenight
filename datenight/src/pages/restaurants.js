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
        Authorization: `Bearer eD7cxOSpnXgM3AfC8B8eDXS6La1cCMEc7a7TXkjTvjdiwAsyCsdM_GDr1U7JT1PwKsSMBJW1W8-5gS5bCfVX1H6yAkxdnyrBvf-4e1P7pBtHJiJOo8nqgWIcqklMXXYx`
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