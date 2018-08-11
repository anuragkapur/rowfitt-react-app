import React from 'react';

class LogSingleDistanceWorkout extends React.Component {
  render() {
    return(
      <main role="main" className="container rowfitt-body-main-below-navbar">
        <h1 className="jumbotron-heading">Single Distance Workout</h1>
        <form>
          <div className="form-group row">
            <div className="input-group col-sm-12">
              <label htmlFor="date" className="col-sm-1 col-form-label">Date</label>
              <input type="date" className="form-control" id="date" placeholder="dd/mm/yy"/>
              <div className="input-group-append">
                <div className="input-group-text"><span className="glyphicon glyphicon-calendar"></span></div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group col-sm-12">
              <label htmlFor="distance" className="col-sm-1 col-form-label">Distance</label>
            <input type="text" className="form-control" id="distance" placeholder="5000"/>
              <div className="input-group-append">
                <div className="input-group-text">meters</div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group col-sm-12">
              <label htmlFor="distance" className="col-sm-1 col-form-label">Time</label>
              <input type="text" className="form-control" id="hours" placeholder="0"/>
              <div className="input-group-append">
                <div className="input-group-text">hh</div>
              </div>
              <input type="text" className="form-control" id="minutes" placeholder="19"/>
              <div className="input-group-append">
                <div className="input-group-text">mm</div>
              </div>
              <input type="text" className="form-control" id="seconds" placeholder="30.0"/>
              <div className="input-group-append">
                <div className="input-group-text">ss.s</div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group col-sm-12">
              <label htmlFor="distance" className="col-sm-1 col-form-label">Split</label>
              <input type="text" className="form-control" id="sr-mm" placeholder="1"/>
              <div className="input-group-append">
                <div className="input-group-text">mm</div>
              </div>
              <input type="text" className="form-control" id="sr-ss" placeholder="57.0"/>
              <div className="input-group-append">
                <div className="input-group-text">ss.s</div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group col-sm-12">
              <label htmlFor="stroke-rate" className="col-sm-1 col-form-label">Stroke Rate</label>
              <input type="text" className="form-control" id="stroke-rate" placeholder="22"/>
              <div className="input-group-append">
                <div className="input-group-text">spm</div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group col-sm-12">
              <label htmlFor="hr" className="col-sm-1 col-form-label">Heart Rate</label>
              <input type="text" className="form-control" id="hr" placeholder="160"/>
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