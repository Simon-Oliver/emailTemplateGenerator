import React from 'react';
import EmailTemplate from './EmailTemplate';

class DataItem extends React.Component {
  state = {
    certificate: '',
    name: '',
    company: '',
    email: '',
    emailGenerated: false
  };

  onInputChange = e => {
    const { value, name } = e.target;
    this.props.editData({ name, value }, this.props.index);
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({
      certificate: e.target.elements.Cert.value,
      name: e.target.elements.name.value,
      company: e.target.elements.company.value,
      email: e.target.elements.email.value,
      emailGenerated: true
    });
  };

  render() {
    const { email, name, company, cert, index } = this.props;
    return (
      <div>
        <div className="ui segment" key={index}>
          <form className="ui form" onSubmit={e => this.handleFormSubmit(e)}>
            <div className="field">
              <div className="two fields">
                <div className="field">
                  <label>Name</label>
                  <input name="name" value={name} onChange={this.onInputChange} />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input name="email" value={email} onChange={this.onInputChange} />
                </div>
              </div>
            </div>

            <div className="field">
              <div className="two fields">
                <div className="field">
                  <label>Certificate</label>
                  <input name="Cert" value={cert} onChange={this.onInputChange} />
                </div>
                <div className="field">
                  <label>Company</label>
                  <input name="company" value={company} onChange={this.onInputChange} />
                </div>
              </div>
            </div>
            <button className="ui button" tabIndex="0">
              Create Email
            </button>
            {this.state.emailGenerated && <EmailTemplate user={this.state} />}
          </form>
        </div>
      </div>
    );
  }
}

export default DataItem;
