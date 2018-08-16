import React, { Component } from "react";
import {Container, Form, FormGroup, Label, Input, Button, Jumbotron, FormFeedback, FormText } from 'reactstrap';
import axios from "axios";
import { Redirect, Link } from 'react-router-dom';
import "./SignUp.css";


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
          focused: false,
          registered: false,
          passwordsMatch: true,
          firstCredsValidated: false
        };

  }

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    // Connected to submit button.
    // Adds user to "users" collection in database upon pressing the submit button. 
    handleFormSubmit = event => {
      event.preventDefault();

      // Create a newUser object with the same email and password key-value pairs as this component's state
      const newUser = {
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.fname,
        lastName: this.state.lname
      };

      // Posts this user to the following api route:
      axios.post("http://localhost:3001/api/users",
      newUser
      )

      // Afterwards...
      .then((data) => {

        console.log(data);

        if (data.data.duplicateUser) {
          // Replace with Modal
          alert("Sorry, that username has been taken");
          console.log("Already taken.");
        }

        // If the data is successfully sent, 
        // run the "authenticate" method included in this component's props.
        // This "authenticate" method can be found in App.js.
        else if(data.data.success) {

            /* 
              The method below will change the state of the App.js component in the following ways:
              * authenticated: true
              * user: newUser.email
            */
            this.props.authenticate(newUser.email);
            this.redirectToCalendar();
            this.setState({firstCredsValidated: true});



        }

      // this.props.authenticate(newUser);
      // this.setState({firstCredsValidated: true});

      })
      .catch(error => {
        console.log(error.response);
      });

      // this.props.authenticate(newUser);
      // this.setState({firstCredsValidated: true});
    };

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

    submitButton(){
      return (

        // If the "registered" state of this component is false,
        // the submit button will be a register button.
        !this.state.registered ? (
        <Button onClick={this.handleFormSubmit} className="reg-form-btn">
          <i className="fas fa-lock" aria-hidden="true">&nbsp;</i> Create Account
        </Button>
        )

        // Otherwise, the submit button will be a login button.
        :
        (<Button onClick={this.handleLogin}>Log In</Button>)
      );
    }



    handleFocusChange = event => {
      event.preventDefault();
      const { name, value } = event.target;
      console.log(event);
      console.log(this.state);
      switch(name) {
        case "email":
          if (this.state.emailConfirm && this.state.email !== this.state.emailConfirm) {
            this.setState({ passwordMatch: false })
          } else {
            this.setState({ passwordMatch: true })
          }
          break;
        default:
          break;
      }
      this.setState({focused: true})

    }

    handleBlur = event => {
      event.preventDefault();
      console.log(event);
      this.setState({focused: false})

    }

    // Method to check if passwords match.
    passwordMatch = () => {

      // If the passwords do not match, display a message.
      if(!this.state.passwordMatch) {
        return (
          <FormText aria-live="polite">Passwords must contain an @ and match</FormText>
        )
      }
    }

    // Changes the clickable text at the top-right of the page.
    // When this message is clicked, the form displayed will change.
    navButton = () => {
      
      // If the "registered" state is false,
      // return the message "Already have an account?"
      if (!this.state.registered) {
        return  (<p id="form-describe" onClick={this.switchForm}>Already have an account?</p>)
      } 
      
      // Otherwise, return another message.
      else {
        return ( <p id="form-describe" onClick={this.switchForm}>New to FamilyDay? Sign Up</p>)
      }
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
        <Form id="reg-form" aria-label="registration-form" aria-describedby="reg-form-label" autoComplete="off">
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
          <FormGroup id="submit-zone">
            { submitButton }
          </FormGroup>
        </Form>
      )
    }

    // Method to display the registration form.
    displayRegistration = () => {
      let passwordsMatchWarning = this.passwordMatch();

      let submitButton = this.submitButton();
      return(

        <Form id="reg-form" aria-label="registration-form" aria-describedby="reg-form-label" autoComplete="off">

          <FormGroup>
            <Label for="email">Email address</Label>
          <Input invalid={this.state.focused} className="reg-input" type="text" name="email" id="email"
              onChange={this.handleInputChange} onFocus={this.handleFocusChange} onBlur={this.handleBlur}/>
            { passwordsMatchWarning }
          </FormGroup>
          <FormGroup>
            <Label for="emailConfirm">Confirm email</Label>
            <Input className="reg-input" type="email" name="emailConfirm" id="emailConfirm"
              // onChange={this.handleInputChange} onFocus={this.displayInstructions} required/>
              onChange={this.handleInputChange} onFocus={this.displayInstructions}/>

          </FormGroup>

          {/* This is actually the "password" field. */}
          <FormGroup>
            <Label for="phone">Phone <span id="fine-print">(recommended)</span></Label>
          <Input type="password" name="password" id="phone" className="reg-input"
              onChange={this.handleInputChange}/>
          </FormGroup>

          <FormGroup>
            <Label for="fname">First Name</Label>
            <Input type="text" name="fname" id="fname" className="reg-input"
              onChange={this.handleInputChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="lname">Last Name</Label>
            <Input type="text" name="lname" id="lname" className="reg-input"
              onChange={this.handleInputChange}/>
          </FormGroup>
          <FormGroup id="submit-zone">
            { submitButton }
          </FormGroup>
        </Form>
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

      let submitButton = this.submitButton();
      let navButton = this.navButton();

      console.log(this.state);

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

            { this.displayForm() }
          </Container>

        </Jumbotron >
      )
    }
  }

  export default SignUp;
