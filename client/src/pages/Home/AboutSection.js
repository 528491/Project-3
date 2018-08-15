import React, { Component } from "react";
import {Media} from "reactstrap";
// import { Container, Row, Col, Jumbotron, Card, Form, Article, Footer, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
// import SignUp from "./../SignUp";

const AboutSection = () => (
    <div>
        <div className="row mt-5">
            <div className="col-12 col-lg-4">
                Whether your family is in the midst of a major change, or whether it's just
                business as usual, family life can be stressful. Competing schedules must be 
                managed, upcoming events must be tracked, key items discussed. Enter FamilyDay.
                FamilyDay is the only app that lets you track your families' entire calendar, as well as
                message members individually or in a group, all in one app. Sign up today and 
                experience stress-free communication and scheduling!
            </div>
            <div className="col-12 col-lg-4">
                <img src="calendar.png" style={{width: 500, height: 300}}/>
                {/* <img alt="Picture of Calendar" src="calendar.png"/> */}
            </div>
        </div>
        <div className="row">
            {/* <button type="button" className="btn btn-primary">
                <Link to="/signup"></Link>
                Sign Up Now
            </button> */}
            <Link to="/signup">
                <button type="button" className="btn btn-primary ml-3 mt-3">Sign Up Now</button>
            </Link>
        </div>
    </div>
);

export default AboutSection;
