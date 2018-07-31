import React from 'react';
import {
  Link
} from 'react-router-dom';

class LogNewWorkout extends React.Component {
  render() {
    return(
      <main role="main" className="container rowfitt-body-main-below-navbar">
        <h1 className="jumbotron-heading">Log a New Workout</h1>
        <div className="row">
          <div className="col">
            <Link className="btn btn-primary btn-lg btn-block" to="/log-new-workout/single-distance-workout" role="button">Single Distance</Link>
            <Link className="btn btn-primary btn-lg btn-block" to="#" role="button">Single Time</Link>
            <Link className="btn btn-primary btn-lg btn-block" to="#" role="button">Fixed Distance Intervals</Link>
            <Link className="btn btn-primary btn-lg btn-block" to="#" role="button">Fixed Time Intervals</Link>
            <Link className="btn btn-primary btn-lg btn-block" to="#" role="button">Variable Distance Intervals</Link>
            <Link className="btn btn-primary btn-lg btn-block" to="#" role="button">Variable Time Intervals</Link>
          </div>
        </div>
      </main>
    );
  }
}

export default LogNewWorkout;