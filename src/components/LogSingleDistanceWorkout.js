import React from 'react';
import axios from 'axios';

const SAVE_WORKOUT_URL = "https://rowfitt-service.herokuapp.com/api/workout";

class LogSingleDistanceWorkout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      saving: false,
      statusMessage: null,
      workout: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.id;

    this.setState(prevState =>
      ({
        workout: {
          ...prevState.workout,
          [name]: value
        }
      })
    );
  }

  handleSubmit(event) {
    console.log('Will save workout = ' + JSON.stringify(this.state.workout));
    event.preventDefault();
    this.saveWorkout();
  }

  saveWorkout = async () => {
    this.setState({ saving: true });
    const { data: { statusMessage }} = await axios.post(SAVE_WORKOUT_URL, this.state.workout);
    this.setState({ saving: false, statusMessage: statusMessage });
  };

  render() {
    return(
      <main role="main" className="container rowfitt-body-main-below-navbar">
        <h1 className="jumbotron-heading">Single Distance Workout</h1>
        <h3>{this.state.statusMessage && this.state.statusMessage.toString()}</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <div className="input-group col-sm-12">
              <label htmlFor="date" className="col-sm-1 col-form-label">Date</label>
              <input type="date" className="form-control" id="date" placeholder="dd/mm/yy"
                     onChange={this.handleInputChange}/>
              <div className="input-group-append">
                <div className="input-group-text"><span className="glyphicon glyphicon-calendar"></span></div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group col-sm-12">
              <label htmlFor="distance" className="col-sm-1 col-form-label">Distance</label>
              <input type="text" className="form-control" id="distance" placeholder="5000"
                     onChange={this.handleInputChange}/>
              <div className="input-group-append">
                <div className="input-group-text">meters</div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group col-sm-12">
              <label htmlFor="timeHh" className="col-sm-1 col-form-label">Time</label>
              <input type="text" className="form-control" id="timeHh" placeholder="0"
                     onChange={this.handleInputChange}/>
              <div className="input-group-append">
                <div className="input-group-text">hh</div>
              </div>
              <input type="text" name="time-mm" className="form-control" id="timeMm" placeholder="19"
                     onChange={this.handleInputChange}/>
              <div className="input-group-append">
                <div className="input-group-text">mm</div>
              </div>
              <input type="text" name="time-ss.s" className="form-control" id="timeSss" placeholder="30.0"
                     onChange={this.handleInputChange}/>
              <div className="input-group-append">
                <div className="input-group-text">ss.s</div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group col-sm-12">
              <label htmlFor="splitMm" className="col-sm-1 col-form-label">Split</label>
              <input type="text" name="split-mm" className="form-control" id="splitMm" placeholder="1"
                     onChange={this.handleInputChange}/>
              <div className="input-group-append">
                <div className="input-group-text">mm</div>
              </div>
              <input type="text" name="split-ss" className="form-control" id="splitSss" placeholder="57.0"
                     onChange={this.handleInputChange}/>
              <div className="input-group-append">
                <div className="input-group-text">ss.s</div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group col-sm-12">
              <label htmlFor="strokeRate" className="col-sm-1 col-form-label">Stroke Rate</label>
              <input type="text" className="form-control" id="strokeRate" placeholder="22"
                     onChange={this.handleInputChange}/>
              <div className="input-group-append">
                <div className="input-group-text">spm</div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group col-sm-12">
              <label htmlFor="heartRate" className="col-sm-1 col-form-label">Heart Rate</label>
              <input type="text" className="form-control" id="heartRate" placeholder="160" onChange={this.handleInputChange}/>
              <div className="input-group-append">
                <div className="input-group-text">bpm</div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      </main>
    );
  }
}

export default LogSingleDistanceWorkout;