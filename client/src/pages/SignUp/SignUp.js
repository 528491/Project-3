import React, { Component } from "react";
import {Container, Row, Col, Jumbotron, Card, Form, Article, Footer, FormGroup, Label, Input, Button} from 'reactstrap';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import * as API from "./../../utils/API.js";


class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
        // username: "",
        email: "",
        password: "",
        authenticated: false
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
      axios.post("http://localhost:3001/api/users",
      {
        email: this.state.email,
        password: this.state.password
      })
      .then((data) => {
        console.log(data);

        if(data.data.success) {
            this.setState({authenticated: true})
        }


      })
      .catch(error => {
        console.log(error.response);
      });


      // API.getUsers(this.state).then(function(response){
      //   console.log(response);
      // }).catch(function(err){
      //   console.log(err);
      // })
    };

    handleLogin = event => {
      event.preventDefault();
      axios.get("http://localhost:3001/api/users/login",
      {
        email: this.state.email,
        password: this.state.password
      })
      .then((data) => {
        console.log(data);

        if(data.data.success) {
            this.setState({authenticated: true})
        }


      })
      .catch(error => {
        console.log(error.response);
      });
    };



    render() {
      if(this.state.authenticated === true) {
        return (<Redirect to='/' />);
      }


      return (
        <Container>
            <Form>
            <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"
            onChange = {this.handleInputChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder"
            onChange={this.handleInputChange}/>
          </FormGroup>
          <Button onClick={this.handleFormSubmit}>Register</Button>
          <Button onClick = {this.handleLogin}>Log In</Button>
          </Form>

        </Container>
      )
    }
  }

  export default SignUp;
