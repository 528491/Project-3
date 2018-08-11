import React from "react";
import Calendar from "../../components/Calendar.js";
import "./CalendarDisplay.css";
import { Container, Row, Col, Jumbotron, Card, Form, Article, Footer, FormGroup, Label, Input, Button } from 'reactstrap';


class CalendarDisplay extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              react<b>calendar</b>
            </span>
          </div>
        </header>
        <Row>
  <Col xs="12">
     <Calendar email = {this.props.email}/>
  </Col>
 </Row>

      </div>
    );
  }
}

export default CalendarDisplay;
