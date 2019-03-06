import React from 'react';

const EmailTemplate = ({ user }) => {
  const text = `Hi ${user.name}`;

  return (
    <div className="field">
      <label>Text</label>
      <textarea value={text} />
    </div>
  );
};

export default EmailTemplate;
