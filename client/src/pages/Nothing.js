import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import Alert from "react-bootstrap/Alert";

function Nothing() {
  return (
 
      <Alert>
          <div className="alert bg-secondary">
            <h1 className="display-4">404 Page Not Found</h1>
            <p>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </p>
            <a className="btn btn-dark btn-lg" href="http://localhost:3000/" role="button">Click to Start Over</a>
            </div>
          </Alert>
  );
}

export default Nothing;
