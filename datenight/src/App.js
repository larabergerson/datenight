import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Jumbotron from "./pages/home"
import Options from "./pages/options"
import Restaurants from "./pages/restaurants"
import API from "./utils/API"
require('dotenv').config()


class App extends Component {
  state = {
    restaurantList: []
  }

  
  restaurant = () => {
    console.log("heree");
    API.restaurantApi.then(results => {
      console.log(this.state)
    this.setState({
        restaurantList: results
      })
    }).catch(err => {
      throw err
    })
  }
  render() {
    console.log(this.restaurant);
    console.log(this.state)
    return (
     
      < BrowserRouter >
      <div className="App">
        <Switch>
          <Route exact path="/" component={Jumbotron}></Route>
            <Route exact path="/options" render={(props) => <Options {...props} restaurantsFunc={this.restaurant} />}
          />
            <Route path="/restaurants"component={Restaurants}></Route>
        </Switch>
            
      </div>
      </BrowserRouter >
    
  );
  }
}

export default App;
