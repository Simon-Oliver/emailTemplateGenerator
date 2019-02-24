import React from 'react';
import DataItem from './DataItem';

const DataItems = props => {
  const { data } = props;
  const mapped = data.map((e, i) => {
    return (
      <DataItem
        key={i}
        index={i}
        name={e.name}
        email={e.email}
        company={e.company}
        cert={e.Cert}
        editData={props.editData}
      />
    );
  });
  return <div className="ui container">{mapped}</div>;
};

export default DataItems;
