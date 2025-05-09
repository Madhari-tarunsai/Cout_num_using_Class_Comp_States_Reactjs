import React from 'react'
import './index.css'

 class App extends React.Component {
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  handleClick=()=>{
    this.setState({ count: this.state.count + 1 });
  }
  decrement=()=>{
    this.setState({ count: this.state.count - 1 });
  }
  reset=()=>{
    this.setState({count:this.setState.count=0})
  }
   
  render() {
    return (
      <div className='design'>
        <h1>Incrementing the numbers</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
export default App
