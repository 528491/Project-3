import React, { Component } from "react";
import {Container, Row, Col, Jumbotron, Card, Form, Article, Footer, FormGroup, Label, Input, Button} from 'reactstrap';
import axios from "axios";

class Home extends Component {
    state = {
      username: "",
      password: ""
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      axios.post("/api/users", this.state).then(function(response){
        console.log(response);
      }).catch(function(err){
        console.log(err);
      })
    };
  

    
  
    render() {
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
            onChange = {this.handleInputChange}/>
          </FormGroup>
          <Button onClick={this.handleFormSubmit}>Submit</Button>
          </Form>

        </Container>
      )
    }
  }
  
  export default Home;
  