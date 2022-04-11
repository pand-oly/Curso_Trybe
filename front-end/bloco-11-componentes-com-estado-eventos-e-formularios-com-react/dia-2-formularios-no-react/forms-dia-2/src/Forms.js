import React from 'react';

class Forms extends React.Component {
  render() {
    return (
      <section>
        <label>
          Name:
          <input name='name' />
        </label>

        <label>
          Email:
          <input name='email' />
        </label>

        <label>
          <textarea name='textArea' ></textarea>
        </label>
      </section>
    );
  }
}

export default Forms;
