import React from 'react';
import axios from 'axios';

class UploadWorkoutImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
  }

  fileChangedHandler = (event) => {
    this.setState({selectedFile: event.target.files[0]})
  };

  uploadHandler = () => {
    console.log(this.state.selectedFile);
    const formData = new FormData();
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    console.log(formData);
    axios.post('https://omy9vj99m4.execute-api.us-east-1.amazonaws.com/dev/workout', this.state.selectedFile, config);
  };

  render() {
    return(
      <main role="main" className="container rowfitt-body-main-below-navbar">
        <h1 className="jumbotron-heading">Upload Workout Image</h1>
        <input type="file" onChange={this.fileChangedHandler} />
        <button onClick={this.uploadHandler}>Upload!</button>
      </main>

    );
  }
}

export default UploadWorkoutImage;