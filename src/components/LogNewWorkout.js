import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

class LogNewWorkout extends React.Component {
  render() {
    return(
      <Router>
        <main role="main" className="container rowfitt-body-main-below-navbar">
          <h1 className="jumbotron-heading">Log a New Workout</h1>
          <div className="row">
            <div className="col">
              <a className="btn btn-primary btn-lg btn-block" href="/log-new-workout/single-distance-workout" role="button">Single Distance</a>
              <a className="btn btn-primary btn-lg btn-block" href="#" role="button">Single Time</a>
              <a className="btn btn-primary btn-lg btn-block" href="#" role="button">Fixed Distance Intervals</a>
              <a className="btn btn-primary btn-lg btn-block" href="#" role="button">Fixed Time Intervals</a>
              <a className="btn btn-primary btn-lg btn-block" href="#" role="button">Variable Distance Intervals</a>
              <a className="btn btn-primary btn-lg btn-block" href="#" role="button">Variable Time Intervals</a>
            </div>
          </div>
        </main>
      </Router>
    );
  }
}

export default LogNewWorkout;