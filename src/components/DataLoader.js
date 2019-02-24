import React from 'react';

class DataLoader extends React.Component {
  state = {
    csvfile: undefined,
    error: ''
  };

  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0]
    });
    this.setState({ error: '' });
  };

  importCSV = event => {
    const { csvfile } = this.state;
    if (!csvfile) {
      this.setState({ error: 'Please Upload a .csv file' });
    } else {
      this.setState({ error: '' });
      const Papa = require('papaparse/papaparse.min.js');
      Papa.parse(csvfile, {
        complete: this.updateData,
        header: true
      });
    }
  };

  updateData = result => {
    const data = result.data;
    console.log(data);
    this.setState({ csvfile: undefined });
    this.filesInput.value = null;
    this.props.handleData(data);
  };

  render() {
    console.log(this.state.csvfile);
    return (
      <div className="App">
        <h2>Import CSV File!</h2>
        <input
          className="csv-input"
          type="file"
          ref={input => {
            this.filesInput = input;
          }}
          name="file"
          placeholder={null}
          onChange={this.handleChange}
        />
        <p />
        <button onClick={this.importCSV}> Upload now!</button>
      </div>
    );
  }
}

export default DataLoader;
