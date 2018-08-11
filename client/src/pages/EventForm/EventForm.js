import React, { Component } from "react";
import {Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import axios from "axios";
import { Redirect } from 'react-router-dom';
// import * as API from "./../../utils/API.js";
import API from "./../../utils/API";
import Space from "../../components/Space";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";

class EventForm extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        // Set all state key-value pairs equal to the page's corresponding parameters.
        this.state = {
            year: this.props.match.params.year,
            month: this.props.match.params.month,
            day: this.props.match.params.day,

            // User will determine this value via the form.
            guardianName: "",

            // We will be pushing the day's events into this array.
            events: [],

            // User will determine this value via the form.
            userEvent: ""
        };
    }

    componentDidMount() {
        this.loadEvents();
    }

    // Copy-pasted from Sign Up form.
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    // When the form is submitted...
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Item submitted!");

        // Post an object to the api/events route.
        axios.post("http://localhost:3001/api/events",

        // The object has the following key-value pairs.
        {
            year: this.state.year,
            month: this.state.month,
            day: this.state.day,
            guardianName: this.state.guardianName,
            userEvent: this.state.userEvent
        })

    }

    // Get request to load all the day's events
    loadEvents = () => {

        // Perform a GET request to the URL.
        // The URL will have queries specified by the "params" object.
        axios.get("http://localhost:3001/api/events", {

            // Queries. These will filter out the items in the database.
            params: {
                year: this.state.year,
                month: this.state.month,
                day: this.state.day
            }
        })

        // Store the results into the "events" array,
        // and clear the guardianName and userEvent fields.
        .then(res => 
            this.setState({events: res.data, guardianName: "", userEvent: ""}))


        .catch(err => console.log(err));

    }



    render() {
        return (

            <Container>
                <Form>

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
                </Form>

                <Space/>
                <Space/>

                {/* If there are items in the "events" array */}
                {this.state.events.length ? (
                    <List>

                        {/* Perform the "map" method on the "events" array. */}
                        {/* Each event in the array with display to the page.*/}
                        {this.state.events.map(userEvent => (
                        <ListItem key={userEvent._id}>
                            <strong>
                                {userEvent.guardianName}
                            </strong>
                            <DeleteBtn/>
                            <p>{userEvent.userEvent}</p>

                        </ListItem>
                        ))}
                    </List>
                ) 

                // If there are no items in the "events" array, then...
                : 
                (
                    <h3>No Results to Display</h3>
                )}
  
            </Container>
        )
      }
};

export default EventForm;