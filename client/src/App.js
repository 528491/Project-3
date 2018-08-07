import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {
  Fade
} from 'react-router';
// import logo from './logo.svg';
// import API from "./utils/API.js";
import './App.css';
// import "./pages/HelloWorld";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import AppNavbar from "./components/AppNavbar";
import {Container} from "reactstrap"

class App extends Component {

  constructor() {
    super();
  }

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
      <Container>
        <AppNavbar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signup" component={SignUp}/>
          </Switch>
        </Router>
      </Container>
      
    );
  }
}

export default App;
