import React from 'react';

class DataItem extends React.Component {
  onInputChange = e => {
    const { value, name } = e.target;
    this.props.editData({ name, value }, this.props.index);
  };

  render() {
    const { email, name, company, cert, index } = this.props;
    return (
      <div className="ui segment" key={index}>
        <div className="ui input">
          <input name="name" value={name} onChange={this.onInputChange} />
          <input name="email" value={email} onChange={this.onInputChange} />
          <input name="company" value={company} onChange={this.onInputChange} />
          <input name="Cert" value={cert} onChange={this.onInputChange} />
        </div>
      </div>
    );
  }
}

export default DataItem;
