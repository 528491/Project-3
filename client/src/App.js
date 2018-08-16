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
import SplashHome from "./pages/Splash/SplashHome"
import AppNavbar from "./components/AppNavbar";

import SplashNavbar from "./components/SplashNavbar";
import {Container} from "reactstrap";
import LoginModal from "./components/LoginModal";
import CalendarDisplay from "./pages/CalendarDisplay/CalendarDisplay";
import EventForm from "./pages/EventForm/EventForm";

import Test from "./pages/SignUp/Test";
import axios from 'axios';
import Onboarding from "./pages/Onboarding/Onboarding";



class App extends Component {

  // constructor() {
  //   super();
  //
  // }
  state = {
    tests: [],
    authenticated: false,
    user: null
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

  // deAuthenticate() {
  //   this.setState({
  //     authenticated: false
  //   })
  //   localStorage.clear()
  // }

  deAuthenticate = () => {
    this.setState({
      authenticated: false
    })
    localStorage.clear();
  }

  redirect = () => {
    return (<Redirect to='/splash' />);
  }

  login = () => {
    console.log('login');
    return (<Redirect to='/' />);
  }

  // logout() {
  //   //not built this route yet:
  //     axios.get('/apis/users/logout')
  //       .then(function (data) {
  //         this.deAuthenticate();
  //         window.location.reload();
  //       }.bind(this)).catch(function (err) {
  //         console.log(err);
  //       });
  // }

  logout = () => {
    this.deAuthenticate();
    window.location.reload();
  }
  
  componentDidMount() {
    // const authenticated = this.state.authenticated;
    // const redirect = this.redirect;
    // console.log(this.state);
    // console.log(this.state.authenticated);
    if(localStorage.getItem('access')) {
      this.setState({authenticated: true})
      console.log(this.state.authenticated)
    }
  }



  render() {
    


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

            {/* <Switch> */}

              <Route exact path="/signup" render={props =>
                <SignUp
                      {...props}
                      authenticate={this.authenticate}
                      deAuthenticate={this.deAuthenticate}
                      authenticated={this.state.authenticated}
                />}
              />

              <Route exact path="/signup/onboarding" render={props =>
                <Onboarding
                  {...props}
                  authenticate={this.authenticate}
                  deAuthenticate={this.deAuthenticate}
                  authenticated={this.state.authenticated}
                />}
              />

            {/* </Switch> */}



            <Route exact path="/" render={props =>
              !this.state.authenticated ? this.redirect() :
                <Test
                  {...props}
                  authenticate={this.authenticate}
                  deAuthenticate={this.deAuthenticate}
                  authenticated={this.state.authenticated}
                />}
            />

            <Route exact path="/test" render={props =>
              !this.state.authenticated ? this.redirect() :
                <Test
                  {...props}
                  authenticate={this.authenticate}
                  deAuthenticate={this.deAuthenticate}
                  authenticated={this.state.authenticated}
                />}
            />

            <Route exact path="/calendar" render={props =>
              !this.state.authenticated ? this.redirect() 
              :
              <CalendarDisplay
                {...props}
                authenticate={this.authenticate}
                deAuthenticate={this.deAuthenticate}
                authenticated={this.state.authenticated}
                email={this.state.user}
              />}
            />

              {/* <Route exact path="/calendar" component={CalendarDisplay}/> */}
              {/* <Route exact path="/calendar/:year/:month/:day" component={EventForm}/> */}

            <Route exact path="/calendar/:year/:month/:day" render={props =>
              !this.state.authenticated ? this.redirect() :
                <EventForm
                  {...props}
                  authenticate={this.authenticate}
                  deAuthenticate={this.deAuthenticate}
                  authenticated={this.state.authenticated}
                  email={this.state.user}

                />}
            />



          </Switch>
      </Router>
     </div>
            
            
    );
  }
}

export default App;
