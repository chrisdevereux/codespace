import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro" style={{ display: 'flex', flexDirection: 'rows' }}>
          <Sidebar />
          <div>
            <Card color="grey">Hello Codespace</Card>
            <Card>Hello Codespace</Card>
            <Card>Hello Codespace</Card>
            <Card>Hello Codespace</Card>
            <Card>Hello Codespace</Card>
            <Card>Hello Codespace!</Card>
          </div>
        </p>
        <div>
          <Field label="How much is a sandwich?" />
          <Field label="How much does it cost?" />
        </div>
      </div>
    );
  }
}

function Field({ label, onChange }) {
  return (
    <div>
      <label>
        {label}
        <input onChange={onChange} />
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
