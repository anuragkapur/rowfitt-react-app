import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from './Dashboard';
import LogNewWorkout from './LogNewWorkout'
import ViewTrainingLog from './ViewTrainingLog'
import LogSingleDistanceWorkout from "./LogSingleDistanceWorkout";

class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <div>
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
                    <Link className="nav-link" to="/">Dashboard <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/log-new-workout">Log New Workout</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/view-training-log">View Training Log</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/log-new-workout" component={LogNewWorkout}/>
          <Route exact path="/view-training-log" component={ViewTrainingLog}/>
          <Route exact path="/log-new-workout/single-distance-workout" component={LogSingleDistanceWorkout}/>
        </div>
      </Router>
    );
  }
}

export default Navigation;