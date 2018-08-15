import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
// import {
//   Fade
// } from 'react-router';
// import logo from './logo.svg';
// import API from "./utils/API.js";
import './App.css';
// import "./pages/HelloWorld";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Onboarding from "./pages/Onboarding/Onboarding";
import AppNavbar from "./components/AppNavbar";
import { Container } from "reactstrap"
import Test from "./pages/SignUp/Test";
import axios from 'axios';


class App extends Component {

  state = {
    tests: [],
    authenticated: false
  }

  // componentDidMount(){
  //   API.getTests().then(res =>
  //   this.setState({tests:res.data}))
  //   .catch(err=>console.log(err));
  // }

  authenticated() {
    return this.state.authenticated
  }

  authenticate = user => {
    localStorage.clear();
    localStorage.setItem('access', user.email)
    this.setState({
      authenticated: true
    })
  }

  deAuthenticate() {
    this.setState({
      authenticated: false
    })
  }

  redirect = () => {
    return (<Redirect to='/splash' />);
  }

  login = () => {
    console.log('login');
    return (<Redirect to='/' />);
  }

  logout() {
    //not built this route yet:
      axios.get('/apis/users/logout')
        .then(function (data) {
          this.deAuthenticate();
          window.location.reload();
        }.bind(this)).catch(function (err) {
          console.log(err);
        });
  }



  render() {
    const authenticated = this.state.authenticated;
    const redirect = this.redirect;
    console.log(this.state);
    if(localStorage.getItem('access')) {
      this.setState({authenticated: true})
    }


    return (
      <div id="app">

        <Router>
        <Switch>

          <Route exact path="/splash" render={props =>
            <div>
            <AppNavbar/>
            <Home
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
            />
            </div>}
          />

        <Route exact path="/signup" render={props =>



            <Switch>
            <SignUp
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
            />
            




            </Switch>
            }
          />
        <Route exact path="/onboarding" render={props =>
            <Onboarding
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
            />}
          />
        <Route exact path="/" render={props =>
            !authenticated ? redirect() :
              <Test
                {...props}
                authenticate={this.authenticate}
                deAuthenticate={this.deAuthenticate}
                authenticated={this.state.authenticated}
              />}
          />
        </Switch>
      </Router>
     </div>

    );
  }
}

export default App;
