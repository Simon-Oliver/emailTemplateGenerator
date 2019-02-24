import React from 'react';
import DataItems from './DataItems';
import DataLoader from './DataLoader';

class App extends React.Component {
  state = {
    data: []
  };

  handleDataLoaderInput = data => {
    this.setState({ data });
  };

  editData = (newData, index) => {
    const { data } = this.state;
    const { name, value } = newData;
    data[index][name] = value;
    this.setState({ data });
  };

  render() {
    return (
      <div>
        <DataLoader handleData={this.handleDataLoaderInput} />
        {this.state.data && <DataItems data={this.state.data} editData={this.editData} />}
      </div>
    );
  }
}

export default App;
