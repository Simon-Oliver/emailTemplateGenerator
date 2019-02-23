import React from 'react';

class App extends React.Component {
  state = {
    csvfile: undefined
  };

  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0]
    });
  };

  importCSV = () => {
    const { csvfile } = this.state;
    const Papa = require('papaparse/papaparse.min.js');
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true
    });
  };

  updateData = result => {
    const data = result.data;
    console.log(data);
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

export default App;
