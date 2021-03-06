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

  authenticate = (email) => {
    console.log(this.state);
    this.setState({
      authenticated: true,
      user: email
    })
  }

  deAuthenticate() {
    this.setState({
      authenticated: false
    })
  }

  redirect = () => {
    return (<Redirect to='/signup' />);
  }

  login = () => {
    console.log('login');
    return (<Redirect to='/' />);
  }

  logout() {
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
    console.log(this.state);
    return (
      <Container>


        {/* <AppNavbar/> */}
        {/* <LoginModal buttonLabel="Login" /> */}
        <Router>
        <Switch>

          {/* Change the exact path for this later to just /. This is just for testing right now. */}
          <Route exact path="/splash" render={props =>
            <Container>
              <SplashNavbar/>
              <SplashHome
                {...props}
                authenticate={this.authenticate}
                deAuthenticate={this.deAuthenticate}
                authenticated={this.state.authenticated}
              />
            </Container>
            }
          />
        <Route exact path="/signup" render={props =>
            <Container>
            {/* <SplashNavbar/> */}
            <SignUp
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
            />
            </Container>}
          />
 

            <Route exact path="/" render={props =>
              // !this.state.authenticated ? this.redirect() :
              <Container>
              <SplashNavbar/>
              <Home
                {...props}
                authenticate={this.authenticate}
                deAuthenticate={this.deAuthenticate}
                authenticated={this.state.authenticated}
                email={this.state.user}
              />
              </Container>}
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
              !this.state.authenticated ? this.redirect() :
                // <Test
                //   {...props}
                //   authenticate={this.authenticate}
                //   deAuthenticate={this.deAuthenticate}
                //   authenticated={this.state.authenticated}
                // />}

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


     </Container>

    );
  }
}

export default App;
