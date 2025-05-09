import React from 'react';
import './index.css'; 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'white'
    };
  }

  handleColor = (clr) => {
    this.setState({ color: clr });
  }

  render() {
    return (
      <div className={`container ${this.state.color}`}>
        <h1 className="title">Selected Color: {this.state.color}</h1>
        <div className="button-group">
          <button onClick={() => this.handleColor('red')}>Red</button>
          <button onClick={() => this.handleColor('green')}>Green</button>
          <button onClick={() => this.handleColor('orange')}>Orange</button>
        </div>
      </div>
    );
  }
}

export default App;
