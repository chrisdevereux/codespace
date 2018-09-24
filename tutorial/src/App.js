import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {}

  get totalCost() {
    return this.state.sandwichPrice * this.state.numberOfSandwiches
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          You need {this.totalCost} for your sandwiches
        </p>
        <div>
          <Field
            label="How much is a sandwich?"
            onChange={sandwichPrice => {
              this.setState({ sandwichPrice })
            }}
          />
          <Field
            label="How many do you want?"
            onChange={numberOfSandwiches => {
              this.setState({ numberOfSandwiches })
            }}
          />
        </div>
      </div>
    );
  }
}

function Field({ label, onChange }) {
  return (
    <div>
      <label>
        <span style={{ marginRight: '1em' }}>
          {label}
        </span>
        <input
          onChange={event => {
            onChange(Number(event.target.value))
          }}
        />
      </label>
    </div>
  )
}

function Sidebar({ children }) {
  return (
    <div>
      Sidebar
    </div>
  )
}

function Card({ color = 'hotpink', children }) {
  return (
    <div style={{ backgroundColor: color, color: 'white' }}>
      {
        React.Children.toArray(children).map(child =>
          child + '!'
        )
      }
    </div>
  )
}

export default App;
