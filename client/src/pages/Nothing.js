import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "react-bootstrap/Jumbotron";

function Nothing() {
  return (
 
      <Jumbotron>
          <div className="jumbotron">
            <h1 className="display-4">404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
            <a className="btn btn-primary btn-lg" href="http://localhost:3000" role="button">Click to Start Over</a>
            </div>
          </Jumbotron>
  );
}

export default Nothing;
