import React, { Component } from "react";
// import {Container} from "reactstrap";
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
// import SignUp from "./../SignUp";
 import AboutSection from "./AboutSection";
import CardDisplay from "./CardDisplay";
import Space from "../../components/Space";
import MenuButton from "../../components/MenuButton";
import SplashPageCarousel from "../../components/SplashPageCarousel";

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

        <SplashPageCarousel/>
        
        <AboutSection/>

        <Space/>
        <Space/>

        <CardDisplay/>

        <Space/>
        <Space/>
          {/* This is the Home Page you'd see if you were logged in */}
          {/* <Link to = "/signup"> */}
            {/* Link to Register/Login */}
          {/* </Link> */}

      </Container>
    )
  }
}

export default Home;
