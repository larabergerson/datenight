import React, { Component } from "react";
import API from "../utils/API"
// import Axios from "axios";
// import YelpFusion from "yelp-fusion";

class FindRestaurants extends Component {
  state = {
    restaurants: [],
    message: ""
  };

  componentDidMount = () => {
    this.getRestaurants()
  }

  getRestaurants = () => {
    API.findAllYelp()
      .then(res => {
        console.log(res.data)
        this.setState({
          restaurants: res.data
        })
      })
      .catch(err => {
        this.setState({
          message: err
        })
      })
  }

  // saveRestaurant = (id) => {
  //   API.saveYelp(id)
  // }

  render() {
    console.log(this.state.restaurants[0])
  return (
    <div>
      {this.state.restaurants ? 
      this.state.restaurants.map(oneRestaurant => (
        <div>
          <p>{oneRestaurant.name}</p>
        </div>
      )) : (
            <h1>{this.state.message}</h1>
        )}
  </div>
  )
}
}

export default FindRestaurants;

          
// export default function Jumbotron()
// {
//           return (
//             <div className="jumbotron">
//             <h1 className="display-4">Date Night Generator</h1>
//             <p className="lead">Customize your night out in a few easy clicks</p>
//             <hr className="my-4"/>
//             <p>To begin choose from below:</p>
//             <a className="btn btn-primary btn-lg" href="#" role="button">Login to Begin</a>
//               </div>
//         )
        
// }