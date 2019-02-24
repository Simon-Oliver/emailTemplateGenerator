import React from 'react';
import DataItem from './DataItem';

class DataItems extends React.Component {
  render() {
    const { data } = this.props;
    const mapped = data.map((e, i) => {
      return (
        <DataItem
          key={i}
          index={i}
          name={e.name}
          email={e.email}
          company={e.company}
          cert={e.Cert}
          editData={this.props.editData}
        />
      );
    });
    return <div className="ui container">{mapped}</div>;
  }
}

export default DataItems;
