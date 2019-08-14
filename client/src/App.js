import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EatsHome from './pages/EatsHome';
import Main from './pages/Main'
// import MyParticles from "./components/particles"
import SavedEats from './pages/SavedEats';
import Nothing from './pages/Nothing';
// import Nav from 'react-bootstrap/Nav';
// import NavBar from './components/HeaderComponent/navbar'
// import HomePage from "./homePage";
import './App.css';
// import Particles from 'react-particles-js';
// import Partivles from './Particles'


function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
  <span class="navbar-brand mb-0 h1">DATE NIGHT ASSITANT</span>
</nav>
      <Router>
      <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/EatsHome" component={EatsHome} />
            <Route name="SavedEats/:id" exact path="/" component={SavedEats} />
        
        <Route component={Nothing}/>
        </Switch>
        </div>
      </Router>
      {/* <Particles /> */}
    </div>
  );
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particlesJS', 'particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

export default App;