import React, { Component } from "react";
// import {Container} from "reactstrap";
import { Container, Row, Col, Jumbotron, Card, Form, Article, Footer, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import SignUp from "./../SignUp";
import AboutSection from "../../components/AboutSection";




class Home extends Component {

  // render() {
  //   return (<div>
  //    We in sign up
  //  </div>);
  // }

  render() {
    return (
      <Container>
        {/* <Link to = "/signup">
            Link to Login
          </Link> */}

        {/* <Row>
          <Col xs="12" lg="4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Col>

        </Row> */}
        <AboutSection/>

      </Container>
    )
  }
}

export default Home;
