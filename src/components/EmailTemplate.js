import React from 'react';
import { generateTemplate } from '../utils/template';

class EmailTemplate extends React.Component {
  state = {
    text: 'Hello Test'
  };

  componentDidMount() {
    const { name, certificate, company } = this.props.user;
    const template = generateTemplate(name, certificate, company);
    this.setState({ text: template });
    console.log(this.state.text);
  }

  onTextChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className="field">
        <label>Text</label>
        <textarea value={this.state.text} onChange={e => this.onTextChange(e)} />
      </div>
    );
  }
}

export default EmailTemplate;
