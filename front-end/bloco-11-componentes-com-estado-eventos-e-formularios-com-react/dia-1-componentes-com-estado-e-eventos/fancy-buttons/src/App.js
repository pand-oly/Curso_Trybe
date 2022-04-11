import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.click1 = this.click1.bind(this);
    this.click2 = this.click2.bind(this);
    this.click3 = this.click3.bind(this);
  }

  click1() {
    console.log('Click 1', this);
  }

  click2() {
    console.log('Click 2', this);
  }

  click3() {
    console.log('Click 3', this);
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={ this.click1 }>1</button>
        <button onClick={ this.click2 }>2</button>
        <button onClick={ this.click3 }>3</button>
      </div>
    );
  }
}

export default App;
