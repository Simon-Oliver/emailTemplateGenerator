import React from 'react';

class DataItems extends React.Component {
  render() {
    const { data } = this.props;
    const mapped = data.map(e => {
      return (
        <div key={e.email}>
          <input value={e.name} />
          <input value={e.email} />
          <input value={e.company} />
          <input value={e.Cert} />
        </div>
      );
    });
    return <div>{mapped}</div>;
  }
}

export default DataItems;
