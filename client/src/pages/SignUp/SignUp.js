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
          errors: [],
          focused: false,
          registered: false,
          passwordMatch: true
        };

  }

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      event.preventDefault();

      const newUser = {
        email: this.state.email,
        password: this.state.password
      };

      axios.post("http://localhost:3000/api/users",
      newUser
      )
      .then((data) => {


        if(data.data.success) {
            this.props.authenticate();

        }


      })
      .catch(error => {
        console.log(error.response);
      });
    };

    handleLogin = event => {
      event.preventDefault();

      const user = {
        email: this.state.email,
        password: this.state.password
      };
      console.log(user)
      axios.post("http://localhost:3001/api/users/login", user)
      .then( data => {
        console.log(data);

        if(data.data.success) {

            this.props.authenticate(user);
        }
      })
      .catch(error => {
        console.log(error);
      })
    }

    submitButton(){
      return (!this.state.registered ? (
        <Button onClick={this.handleFormSubmit} className="reg-form-btn">
          <i className="fas fa-lock" aria-hidden="true">&nbsp;</i> Create Account
        </Button>)
        :
        (<Button onClick={this.handleLogin}>Log In</Button>));
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


    passwordMatch = () => {
      if(!this.state.passwordMatch) {
        return (
          <FormText aria-live="polite">Passwords must contain an @ and match</FormText>
        )
      }

    }

    navButton = () => {
      if (this.state.registered) {
      return  (<p id="form-describe" onClick={this.switchForm}>Already have an account?</p>)
    } else {
      return ( <p id="form-describe" onClick={this.switchForm}>New to FamilyDay? Sign Up</p>)
      }
    }

    switchForm = () => {
      this.setState({registered: !this.state.registered})
    }

    displayForm = () => {
      console.log('displayForm', this.state);
      if(!this.state.registered) {
          return this.displayRegistration();
      } else {
        return this.displayLogin();
      }
    }

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
              onChange={this.handleInputChange} onFocus={this.displayInstructions} required/>
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone <span id="fine-print">(recommended)</span></Label>
            <Input type="tel" name="phone" id="phone" className="reg-input"
              onChange={this.handleInputChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="password">Phone <span id="fine-print">(recommended)</span></Label>
          <Input type="password" name="password" id="password" className="reg-input"
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

    render() {
      if(this.props.authenticated) {
        return (<Redirect to='/'/>);
      }

      let submitButton = this.submitButton();
      let navButton = this.navButton();

      console.log(this.state);

      return (
        <Jumbotron id="reg-container">
          <div id="arrow-container">
            <div>
            <Link to="/splash" id="back"><i className="fas fa-chevron-left" aria-hidden="true"></i> Back </Link>
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
            (<Button onClick={this.handleLogin}>Log In</Button>))
          </Container>

        </Jumbotron >
      )
    }
  }

  export default SignUp;
