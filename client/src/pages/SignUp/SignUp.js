import React, { Component } from "react";
import {Container, Form, FormGroup, Label, Input, Button, Jumbotron, FormFeedback, FormText } from 'reactstrap';
import axios from "axios";
import { Redirect, Link } from 'react-router-dom';
import "./SignUp.css";


class SignUp extends Component {

  constructor(props) {
    super(props);
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

    handleFormSubmit = event => {


      // if(false) {
      // } else {
      // event.preventDefault();
      //
      const newUser = {
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.fname,
        lastName: this.state.lname
      };
      // console.log(newUser);
      // axios.post("http://localhost:3001/api/users",
      // newUser
      // )
      // .then((data) => {
      //   if(data.data.success) {
      //       this.props.authenticate();
      //   }
      // })
      // .catch(error => {
      //   console.log(error.response);
      // });
      // }

      this.props.authenticate(newUser);
      this.setState({firstCredsValidated: true});

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

    submitButton = () => {
      return (!this.state.registered ? (
        <Button onClick={this.handleFormSubmit} className="reg-form-btn">
          <i className="fas fa-lock" aria-hidden="true">&nbsp;</i> Create Account
        </Button>)
        :
        (<Button onClick={this.handleLogin}>
          <i className="fas fa-lock" aria-hidden="true">&nbsp;</i> Log In</Button>));
    }



    handleFocusChange = event => {
      event.preventDefault();
      const { name, value } = event.target;
      this.setState({focused: true})

    }

    handleBlur = event => {
      event.preventDefault();
      this.setState({focused: false})
    }


    passwordsMatchWarning = () => {
      if(!this.state.passwordsMatch) {
        return (
          <FormFeedback invalid={"true"} aria-live="polite">Passwords must contain an @ and match.</FormFeedback>
        );
      }
    }

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

    switchForm = () => {
      this.setState({registered: !this.state.registered})
    }

    displayForm = () => {
      if(!this.state.registered) {
          return this.displayRegistration();
      } else {
        return this.displayLogin();
      }
    }

    displayLogin(){
      return(
        <div>
          <FormGroup>
            <Label for="emailConfirm">Email address</Label>
          <Input className="reg-input" type="email" name="email" id="emailConfirm"
              onChange={this.handleInputChange} required/>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" className="reg-input"
              onChange={this.handleInputChange} required/>
          </FormGroup>
        </div>
      );
    }

    handleEmailInput = event => {
      if(this.state.emailConfirm &&
         this.state.email.indexOf('@') > -1 &&
         this.state.email.slice(0, event.target.value.length) !== event.target.value) {
          this.setState({passwordsMatch: false});
      } else {
          this.setState({passwordsMatch: true});
      }
    }

    displayRegistration = () => {

      const passwordsMatchWarning = this.passwordsMatchWarning();
      const submitButton = this.submitButton();

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
              onChange={handleEmailInput} invalid={!this.state.passwordsMatch} required/>
              { passwordsMatchWarning }
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone <span id="fine-print">(recommended)</span></Label>
          <Input type="password" name="password" id="phone" className="reg-input"
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

     if(this.state.firstCredsValidated) {
        return (<Redirect to='signup/onboarding' biz={"Rot into pieces, Papa John's"}/>);
      } else if (this.state.authenticated) {
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
  }

  export default SignUp;
