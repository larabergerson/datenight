import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Jumbotron from "./pages/home"
import Options from "./pages/options"
import Restaurants from "./pages/restaurants"
import Api from "../utils/API"
import { STATES } from 'mongoose';


function App() {
  state = {
    restaurantList: []
  }
  restaurants = () => {
    Api.restaurants()
      .then(results => {
      
    })
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Jumbotron}></Route>
        <Route exact path="/options" component={Options}></Route>
        <Route path="/restaurants" component={Restaurants}></Route>
          
        
        </Switch>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
