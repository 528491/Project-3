import React, { Component } from "react";
// import {Container} from "reactstrap";
import {Container, Row, Col, Jumbotron, Card, Form, Article, Footer, FormGroup, Label, Input, Button} from 'reactstrap';


class SignUp extends Component {

// render() {
//   return (<div>
//    We in sign up
//  </div>);
// }

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
          onChange={this.handleInputChange}/>
        </FormGroup>
        <Button onClick={this.handleFormSubmit}>Submit</Button>
        </Form>

      </Container>
    )
  }
}





export default SignUp;
