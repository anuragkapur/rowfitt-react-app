import React from 'react';

class LogSingleDistanceWorkout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.id;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A form was submitted' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return(
      <main role="main" className="container rowfitt-body-main-below-navbar">
        <h1 className="jumbotron-heading">Single Distance Workout</h1>
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
              <label htmlFor="distance" className="col-sm-1 col-form-label">Time</label>
              <input type="text" className="form-control" id="time-hh" placeholder="0"
                     onChange={this.handleInputChange}/>
              <div className="input-group-append">
                <div className="input-group-text">hh</div>
              </div>
              <input type="text" name="time-mm" className="form-control" id="time-mm" placeholder="19"
                     onChange={this.handleInputChange}/>
              <div className="input-group-append">
                <div className="input-group-text">mm</div>
              </div>
              <input type="text" name="time-ss.s" className="form-control" id="time-sss" placeholder="30.0"
                     onChange={this.handleInputChange}/>
              <div className="input-group-append">
                <div className="input-group-text">ss.s</div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group col-sm-12">
              <label htmlFor="distance" className="col-sm-1 col-form-label">Split</label>
              <input type="text" name="split-mm" className="form-control" id="split-mm" placeholder="1"
                     onChange={this.handleInputChange}/>
              <div className="input-group-append">
                <div className="input-group-text">mm</div>
              </div>
              <input type="text" name="split-ss" className="form-control" id="split-sss" placeholder="57.0"
                     onChange={this.handleInputChange}/>
              <div className="input-group-append">
                <div className="input-group-text">ss.s</div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group col-sm-12">
              <label htmlFor="stroke-rate" className="col-sm-1 col-form-label">Stroke Rate</label>
              <input type="text" className="form-control" id="stroke-rate" placeholder="22"
                     onChange={this.handleInputChange}/>
              <div className="input-group-append">
                <div className="input-group-text">spm</div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group col-sm-12">
              <label htmlFor="hr" className="col-sm-1 col-form-label">Heart Rate</label>
              <input type="text" className="form-control" id="hr" placeholder="160" onChange={this.handleInputChange}/>
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