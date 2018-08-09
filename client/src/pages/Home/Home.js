import React, { Component } from "react";
// import {Container} from "reactstrap";
import { Container, Row, Col, Jumbotron, Card, Form, Article, Footer, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import SignUp from "./../SignUp";
import AboutSection from "./AboutSection";
import CardDisplay from "./CardDisplay";
import Space from "../../components/Space";

class Home extends Component {

  // render() {
  //   return (<div>
  //    We in sign up
  //  </div>);
  // }

  render() {
    return (
      <Container>
        <Space/>

        <AboutSection/>

        <Space/>
        <Space/>
        <Space/>

        <CardDisplay/>

        <Space/>
        <Space/>
          This is the Home Page you'd see if you were logged in
          <Link to = "/signup">
            Link to Register/Login
          </Link>

      </Container>
    )
  }
}

export default Home;
