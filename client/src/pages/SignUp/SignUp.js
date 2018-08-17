import React, { Component } from "react";
import {Container, Form, FormGroup, Label, Input, Button, Jumbotron, FormFeedback, FormText } from 'reactstrap';
import axios from "axios";
import { Redirect, Link } from 'react-router-dom';
import "./SignUp.css";
import Onboarding from '../Onboarding'


class SignUp extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    // this.state = {
    //     // username: "",
    //     email: "",
    //     password: "",
    //     errors: [],
    //     focused: {
    //       nameInstructions: false,
    //       emailInstructions: false,
    //       passwordBlank: false,
    //       confirmPasswordError: false,
    //       invalidEmail: false,
    //       shouldLogin: false,
    //       // shouldRegister: false÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷////
    //     }
    //   };
      this.state = {
          // username: "",
          email: "",
          emailConfirm: "",
          password: "",
          fname: "",
          lname: "",
          errors: [],
          phone: "",
          focused: false,
          registered: false,
          emailsMatch: true,
          firstCredsValidated: false
        };

  }

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    handleFirstStepSubmit = event => {
      this.setState({firstCredsValidated: true});
    }

    // Connected to submit button.
    handleLogin = event => {
      event.preventDefault();

      const user = {
        email: this.state.email,
        password: this.state.password
      };
      console.log(user)

      // Look at "usersController" file for post instructions.
      axios.post("http://localhost:3001/api/users/login", user)
      .then( data => {
        console.log(data);

        // If the data is successfully sent, 
        // run the "authenticate" method included in this component's props.
        // This "authenticate" method can be found in App.js.
        if(data.data.success) {

             /* 
              The method below will change the state of the App.js component in the following ways:
              * authenticated: true
              * user: newUser.email
            */
            this.props.authenticate(user);
            // this.redirectToCalendar();
            this.setState({firstCredsValidated: true});

        }

        // else {
        //   console.log("login failed!");
        // }
      })
      .catch(error => {
        console.log(error);
      })
    }

    submitButton = () => {
      return (!this.state.registered ? (
        <Link to="signup/onboarding" className="reg-form-link" user={this.state}>
          <i className="fas fa-lock" aria-hidden="true">&nbsp;</i> Create Account
        </Link>)
        :
        (<Button onClick={this.handleLogin}>Log In</Button>)
      );
    }



    handleFocusChange = event => {
      event.preventDefault();
      //const { name, value } = event.target;
      this.setState({focused: true})

    }

    handleBlur = event => {
      event.preventDefault();
      console.log(event);
      this.setState({focused: false})

    }

    // Method to check if passwords match.
    // passwordMatch = () => {

    emailsMatchWarning = () => {
      if(!this.state.emailsMatch) {
        return (
          <FormFeedback invalid={"true"} aria-live="polite">Emails must contain an @ and match.</FormFeedback>
        );
      }
    }

    // Changes the clickable text at the top-right of the page.
    // When this message is clicked, the form displayed will change.
    // navButton = () => {
      
    //   // If the "registered" state is false,
    //   // return the message "Already have an account?"
    //   if (!this.state.registered) {
    //     return  (<p id="form-describe" onClick={this.switchForm}>Already have an account?</p>)
    //   } 
      
    //   // Otherwise, return another message.
    //   else {
    //     return ( <p id="form-describe" onClick={this.switchForm}>New to FamilyDay? Sign Up</p>)
    //   }
    // }

    navButton = () => {

      const instructions = this.state.registered ? "New to FamilyDay?" : "Already Have An Account?" ;
      const altLink = this.state.registered ? "Sign Up" : "Log In";

      return (
        <div>
          <button id="form-describe"
            onClick={this.switchForm}>
            <span>{instructions}</span>
            <br/>
            <span>{altLink}</span>
          </button>
        </div>);
    }
    

    // Method to switch form between "register" and "login"
    // Switching is controlled via the state.registered variable.
    // Controls navButton and displayForm.
    switchForm = () => {

      // Switches the state.registered variable to its opposite.
      this.setState({registered: !this.state.registered})
    }

    // method to display the proper form to the page.
    // Dependent on state.registered, just like the navButton method.
    displayForm = () => {
      console.log('displayForm', this.state);

      // if "registered" is false,
      if(!this.state.registered) {

          // Displays the registration page.
          return this.displayRegistration();
      } 
      
      // Otherwise, display the login page.
      else {
        return this.displayLogin();
      }
    }

    // Method to display the login form.
    displayLogin(){

    let submitButton = this.submitButton();
      return(
        <div>
        {/* <Form id="reg-form" aria-label="registration-form" aria-describedby="reg-form-label" autoComplete="off"> */}
          <FormGroup>
            <Label for="emailConfirm">Email address</Label>
          <Input className="reg-input" type="email" name="email" id="emailConfirm"
              onChange={this.handleInputChange} onFocus={this.displayInstructions} required/>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" className="reg-input"
              onChange={this.handleInputChange}/>
          </FormGroup>
        </div>
      );
    }

    handleEmailInput = event => {
      if(this.state.emailConfirm &&
         this.state.email.indexOf('@') > -1 &&
         this.state.email.slice(0, event.target.value.length) !== event.target.value) {
          this.setState({emailsMatch: false});
      } else {
          this.setState({emailsMatch: true});
      }
    }

    // Method to display the registration form.
    displayRegistration = () => {
      // let passwordsMatchWarning = this.passwordMatch();

      const emailsMatchWarning = this.emailsMatchWarning();

      const handleEmailInput = event => {
        this.handleInputChange(event);
        this.handleEmailInput(event);
      };

      return (
        <div>
          <FormGroup>
            <Label for="email">Email address</Label>
          <Input invalid={this.state.focused} className="reg-input" type="text" name="email" id="email"
              onChange={handleEmailInput} onFocus={this.handleFocusChange} onBlur={this.handleBlur} required/>
          </FormGroup>
          <FormGroup>
            <Label for="emailConfirm">Confirm email</Label>
            <Input className="reg-input" type="email" name="emailConfirm" id="emailConfirm"
              onChange={handleEmailInput} invalid={!this.state.emailsMatch} required/>
              { emailsMatchWarning }
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone <span id="fine-print">(recommended)</span></Label>
          <Input type="text" name="phone" id="phone" className="reg-input"
              onChange={this.handleInputChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="fname">First Name</Label>
            <Input type="text" name="fname" id="fname" className="reg-input"
              onChange={this.handleInputChange} required/>
          </FormGroup>
          <FormGroup>
            <Label for="lname">Last Name</Label>
            <Input type="text" name="lname" id="lname" className="reg-input"
              onChange={this.handleInputChange} required/>
          </FormGroup>
        </div>
      );
    

    }

    displayBackArrow = () => {
      return (
        <div id="arrow-container">
          <Link to="/" id="back" test="hi"><i className="fas fa-chevron-left" id="back-arrow" aria-hidden="true"></i> Back </Link>
        </div>
      );
    }

    displayInstructions = () => {
      if(!this.state.registered) {
        return (
          <div id="teaser-text">
            <FormText>Creating an account is the first step to drama-free parenting.&nbsp;
              <Link to="splash">Learn More </Link>
            </FormText>
          </div>
        );
      }
    }

    render() {

      if (this.state.authenticated) {
        return (<Redirect to='calendar'/>);
      };


      const submitButton = this.submitButton();
      const navButton = this.navButton();
      const backArrow = this.displayBackArrow();
      const displayForm = this.displayForm()
      const displayInstructions = this.displayInstructions();

      return (
        <Jumbotron id="reg-container">
        <div id="form-nav-container">
          <div id="arrows-container">
              { backArrow }
              { navButton }
          </div>
          <Container id="reg-form-container">
            <Container id="reg-teaser">
              <div>
                <p className="reg-form-teaser">Family Day.</p>
                <p className="reg-form-teaser">Fully Planned.</p>
              </div>
                { displayInstructions }
            </Container>
            <hr></hr>
                <Form id="reg-form" aria-label="registration-form" aria-describedby="reg-form-label" autoComplete="off">
                  { displayForm }
                <FormGroup id="submit-zone">
                  { submitButton }
                </FormGroup>
              </Form>
          </Container>
        </div>
      </Jumbotron>
      );
    }








    redirectToCalendar = () => {
      return (
        <Redirect to='/calendar' />
      )
    }

    render() {
      if(this.props.authenticated) {
        return (<Redirect to='/calendar'/>);
      }

      if (this.state.authenticated) {
        return (<Redirect to='calendar'/>);
      };

      console.log(this.state.registered);


      const submitButton = this.submitButton();
      const navButton = this.navButton();
      const backArrow = this.displayBackArrow();
      const displayForm = this.displayForm()
      const displayInstructions = this.displayInstructions();

      return (
        <Jumbotron id="reg-container">
          <div id="arrow-container">
            <div>
            <Link to="/" id="back" test="hi"><i className="fas fa-chevron-left" aria-hidden="true"></i> Back </Link>
            </div>
            <div>
            { navButton }
            </div>
          </div>
          <Container id="reg-form-container">
            <Container id="reg-teaser">
              <p className="reg-form-teaser">Family Day.</p>
              <p className="reg-form-teaser">Fully Planned.</p>
            </Container>
            <hr></hr>
                <Form id="reg-form" aria-label="registration-form" aria-describedby="reg-form-label" autoComplete="off">
                  { displayForm }
                <FormGroup id="submit-zone">
                  { submitButton }
                </FormGroup>
              </Form>
          </Container>

        </Jumbotron >
      )
    }
  }

  export default SignUp;
