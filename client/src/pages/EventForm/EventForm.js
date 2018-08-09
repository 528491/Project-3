import React, { Component } from "react";
import {Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import * as API from "./../../utils/API.js";

class EventForm extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log(props);
    //     this.state = {
    //         // username: "",
    //         year: this.props.year,
    //         month: this.props.month,
    //         day: this.props.day,
    //         events: []
    //     };
    // }

    // addEvent = event => {
    //     event.preventDefault();
    //     axios.post("http://localhost:3001/api/events")
    // }

    componentDidMount() {
        API.getDayEvents(this.props.match.params.id)
        // .then(res => this.setState({ book: res.data }))
        // .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <p>This is the event form.</p>
            </div>
        )
    }
};

export default EventForm;