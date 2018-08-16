import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import {Form, FormGroup, Label, Container, Input, Button, Jumbotron, FormFeedback, FormText } from 'reactstrap';
import '../SignUp/SignUp.css';
import './Onboarding.css';
class Onboarding extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
        password: "",
        passwordConfirm: "",
        passwordsMatch: true,
        focused: false
      }

  }


      handleFormSubmit = event => {


        // if(false) {
        // } else {
        // event.preventDefault();
        //
        const newUser = {
          email: this.props.email,
          password: this.state.password,
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



      };



  handlePasswordInput = event => {
    console.log(this.state);
    if(this.state.passwordConfirm &&
       this.state.password.slice(0, event.target.value.length) !== event.target.value) {
           console.log('false');
        this.setState({passwordsMatch: false});
    } else {
      console.log('true');
        this.setState({passwordsMatch: true});
    }
  }

  passwordsMatchWarning = () => {
    if(!this.state.passwordsMatch) {
        return (
          <FormFeedback invalid={"true"} aria-live="polite">Passwords must match.</FormFeedback>
        );
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

// onFocus={this.handleFocusChange} onBlur={this.handleBlur}
    render() {
      const passwordsMatchWarning = this.passwordsMatchWarning();

      const handlePasswordInput = event => {
        this.handleInputChange(event);
        this.handlePasswordInput(event);
      };


      return (
        <Jumbotron id="password-container">
        <div id="form-nav-container">
          <Container id="reg-form-container">
        <Form id="reg-form">

          <FormGroup>
            <Label htmlFor="password">Password</Label>
          <Input type="password" className="reg-input" type="text" name="password" id="password"
              onChange={handlePasswordInput} required/>
          </FormGroup>


      <FormGroup>

        <Label htmlFor="password2">Confirm password</Label>
        <Input className="reg-input" type="text" name="passwordConfirm" id="password2"
          onChange={handlePasswordInput} invalid={!this.state.passwordsMatch}  required/>
        { passwordsMatchWarning }
      </FormGroup>



      <FormGroup id="submit-zone">
        <Link to="walkthrough" className="password-form-link" user={this.state}>
          <i className="fas fa-lock" aria-hidden="true">&nbsp;</i> Create Account
        </Link>
      </FormGroup>
    </Form>
  </Container>
  </div>
  </Jumbotron>
      );
    }
  }

  export default Onboarding;
