import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Dashboard from './Dashboard';
import LogNewWorkout from './LogNewWorkout'
import ViewTrainingLog from './ViewTrainingLog'

const LogSingleDistanceWorkout = () => (
  <div>
    <br></br><br></br><br></br><br></br>
    <h2>Log Single Distance Workout</h2>
  </div>
);

class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <wrapper>
          <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <a className="navbar-brand" href="/">Rowfitt</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                      aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">Dashboard <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/log-new-workout">Log New Workout</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/view-training-log">View Training Log</a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/log-new-workout" component={LogNewWorkout}/>
          <Route exact path="/view-training-log" component={ViewTrainingLog}/>
          <Route exact path="/log-new-workout/single-distance-workout" component={LogSingleDistanceWorkout}/>
        </wrapper>
      </Router>
    );
  }
}

export default NavBar;