import React from "react";
import dateFns from "date-fns";
// import Space from "./Space";
import "./CalendarCell.css";
import Space from "../Space";
import axios from "axios";
import {Row, Col} from "reactstrap";
import { Link } from 'react-router-dom';




/*

Props:
* day
* monthStart
* selectedDate
* cloneDay
* formattedDate

*/

// const CalendarCell = (props) => (


class CalendarCell extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            // hasEvents: false
            events: []
        };

    }

    componentDidMount() {
        this.checkForEvents();
    }

    checkForEvents() {
        console.log("Checked for events.");
        axios.get("http://localhost:3001/api/events", {

            // Queries. These will filter out the items in the database.
            params: {
                year: dateFns.format(this.props.currentMonth, "YYYY"),
                month: dateFns.format(this.props.currentMonth, "MMMM"),
                day: this.props.formattedDate,
                email: this.props.email
            }
        })

        .then(res =>
            this.setState({events: res.data}))


        .catch(err => console.log(err));

    }


    // What happens when user clicks a certain day on the calendar
    onDateClick = day => {

        // this.setState({
        //     hasEvents: true
        // });
    }

    render() {
        return (
            // This is one day box.
            <div
            className={`col cell ${

            // If it is not the case that the day and the start of the month are equal,
            // set className to "disabled".
            // Otherwise, if the day and the selected date are equal,
            // set className to "selected."
            // Otherwise, don't make a new className.
            !dateFns.isSameMonth(this.props.day, this.props.monthStart)
                ? "disabled"
                : dateFns.isSameDay(this.props.day, this.props.selectedDate) ? "selected" : ""
            }`}

            key={this.props.day}
            onClick={() => this.onDateClick(dateFns.parse(this.props.cloneDay))}
            >
                <Link to= {`/calendar/${dateFns.format(this.props.currentMonth, "YYYY")}/${dateFns.format(this.props.currentMonth, "MMMM")}/${this.props.formattedDate}`} style={{height: '100%', width: '100%'}}>
                    <span className="number">{this.props.formattedDate}</span>
                    <span className="bg">{this.props.formattedDate}</span>
                    {/* <span>You have events</span> */}

                    {/* {this.state.events.length ? (
                        <span>You have {this.state.events.length} events on this day!</span>

                    ) : (<div></div>)} */}

                    {this.state.events.length ?
                        (this.state.events.length === 1 ?
                            (
                                // <Row>
                                //     <Col>
                                        <span className="message">You have {this.state.events.length} event on this day!</span>
                                //     </Col>
                                // </Row>
                            )
                            :
                            (
                                // <Row>
                                //     <Col>
                                        <span className="message">You have {this.state.events.length} events on this day!</span>
                                //     </Col>
                                // </Row>

                            )
                        )
                        : (<div></div>)}


                </Link>
            </div>



        )
    }

// );
}

export default CalendarCell;
