import React, { Component } from "react";
import {Container, Row, Col, Jumbotron, Card, Form, Article, Footer} from 'reactstrap';


class Home extends Component {
    state = {
      articles: [],
      q: "",
      start_year: "",
      end_year: "",
      message: "Search For Articles To Begin!"
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      this.getArticles();
    };
  
    
  
    render() {
      return (
        <Container>
          test
        
        </Container>
      )
    }
  }
  
  export default Home;
  