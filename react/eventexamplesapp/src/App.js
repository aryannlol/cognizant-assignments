import React, { Component } from 'react';
import { CurrencyConvertor } from './Components/CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  incrementCounter = () => {
    this.setState(prev => ({ counter: prev.counter + 1 }));
    this.sayHello();
  };
  decrementCounter = () => {
    this.setState(prev => ({ counter: prev.counter - 1 }));
  };
  sayHello = () => {
    console.log('Hello! Counter incremented.');
  };
  sayWelcome = (msg) => {
    alert(msg);
  };
  handlePress = (e) => {
    alert('I was clicked');
  };
  render() {
    return (
      <div>
        <h2>Event Examples App</h2>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
        <button onClick={() => this.sayWelcome('Welcome to React Events!')}>Say Welcome</button>
        <button onClick={this.handlePress}>Synthetic Event Button</button>
        <hr />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
