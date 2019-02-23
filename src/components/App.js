import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <div className="ui input">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    );
  }
}

export default App;
