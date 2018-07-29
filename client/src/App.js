import React, { Component } from 'react';
// import logo from './logo.svg';
// import API from "./utils/API.js";
import './App.css';
// import "./pages/HelloWorld";
import HelloWorld from './pages/HelloWorld';

class App extends Component {
 
  state = {
    tests: []
  }

  // componentDidMount(){
  //   API.getTests().then(res => 
  //   this.setState({tests:res.data}))
  //   .catch(err=>console.log(err));
  // }
  
 
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <p>{this.state.tests}</p>
      // </div>

      <div>
        <HelloWorld/>
      </div>
    );
  }
}

export default App;
