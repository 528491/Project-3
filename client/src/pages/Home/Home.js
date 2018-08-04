import React, { Component } from "react";
// import {Container} from "reactstrap";
import {Container, Row, Col, Jumbotron, Card, Form, Article, Footer, FormGroup, Label, Input, Button} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import SignUp from "./../SignUp";




class Home extends Component {

// render() {
//   return (<div>
//    We in sign up
//  </div>);
// }

  render() {
    return (
      <Container>
          <Link to = "/signup">
            Link to Login
          </Link>

      </Container>
    )
  }
}

export default Home;
