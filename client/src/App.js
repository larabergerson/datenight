import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/home";


function App() {
   {/* <Route exact path='/saved' component={Saved} />  */}
  return (
    <div className="App">
      <Router>
       
        <Route component={Home}/>
      </Router>
    </div>
  )
}

export default App;