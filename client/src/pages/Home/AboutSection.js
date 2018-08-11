import React from "react";
// import {Container} from "reactstrap";
// import { Container, Row, Col, Jumbotron, Card, Form, Article, Footer, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
// import SignUp from "./../SignUp";

const AboutSection = () => (
    <div>
        <div className="row mt-5">
            <div className="col-12 col-lg-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
