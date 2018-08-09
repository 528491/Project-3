import React, { Component } from "react";
import {Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import * as API from "./../../utils/API.js";

class EventForm extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            // username: "",
            // year: this.props.year,
            year: this.props.match.params.year,
            // month: this.props.month,
            month: this.props.match.params.month,
            // day: this.props.day,
            day: this.props.match.params.day,
            guardianName: "",
            // events: []
            userEvent: ""
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        // const guardianName = event.target.guardianName;
        // const userEvent = event.target.userEvent;
        this.setState({
          [name]: value
            // guardianName
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        axios.post("http://localhost:3001/api/events",
        {
        //   email: this.state.email,
        //   password: this.state.password
            year: this.state.year,
            month: this.state.month,
            day: this.state.day,
            guardianName: this.state.guardianName,
            userEvent: this.state.userEvent
        })
        // .then((data) => {
  
  
        //   if(data.data.success) {
        //       this.props.authenticate();
              
        //   }
  
  
        // })
        // .catch(error => {
        //   console.log(error.response);
        // });
    }

    // addEvent = event => {
    //     event.preventDefault();
    //     axios.post("http://localhost:3001/api/events")
    // }

    // componentDidMount() {
        // API.getDayEvents(this.props.match.params.id)
        // .then(res => this.setState({ book: res.data }))
        // .catch(err => console.log(err));
    // }

    // render() {
    //     return(
    //         <div>
    //             <p>This is the event form.</p>
    //         </div>
    //     )
    // }

    render() {
        if(this.props.authenticated) {
          return (<Redirect to='/' />);
        }
  
        return (

            <Container>

                <Form>
                    {/* <FormGroup>
                        <Label for="exampleYear">Year</Label>
                        <Input type="year" name="year" id="exampleYear" placeholder="with a placeholder"
                        onChange = {this.handleInputChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleMonth">Month</Label>
                        <Input type="month" name="month" id="exampleMonth" placeholder="with a placeholder"
                        onChange = {this.handleInputChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleDay">Day</Label>
                        <Input type="day" name="day" id="exampleDay" placeholder="with a placeholder"
                        onChange = {this.handleInputChange}/>
                    </FormGroup> */}

                    <FormGroup>
                        <Label for="exampleGuardianName">Guardian's Name</Label>
                        <Input type="guardianName" name="guardianName" id="exampleGuardianName" placeholder="with a placeholder"
                        onChange = {this.handleInputChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEvent">Event Name</Label>
                        <Input type="userEvent" name="userEvent" id="exampleEvent" placeholder="password placeholder"
                        onChange={this.handleInputChange}/>
                    </FormGroup>

                    <Button onClick={this.handleFormSubmit}>Create Event</Button>
                    {/* <Button onClick = {this.handleLogin}>Log In</Button> */}
                </Form>
  
            </Container>
        )
      }
};

export default EventForm;