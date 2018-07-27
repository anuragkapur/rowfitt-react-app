import React from 'react';

class LogNewWorkout extends React.Component {
  render() {
    return(
      <main role="main" className="container rowfitt-body-main-below-navbar">
        <h1 className="jumbotron-heading">Log a New Workout</h1>
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-primary btn-lg btn-block">Single Distance</button>
            <button type="button" className="btn btn-primary btn-lg btn-block">Single Time</button>
            <button type="button" className="btn btn-primary btn-lg btn-block">Fixed Distance Intervals</button>
            <button type="button" className="btn btn-primary btn-lg btn-block">Fixed Time Intervals</button>
            <button type="button" className="btn btn-primary btn-lg btn-block">Variable Distance Intervals</button>
            <button type="button" className="btn btn-primary btn-lg btn-block">Variable Time Intervals</button>
          </div>
        </div>
      </main>
    );
  }
}

export default LogNewWorkout;