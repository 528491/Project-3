import React from "react";
import dateFns from "date-fns";
// import Space from "./Space";
import "./CalendarCell.css";
import Space from "../Space";




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
            hasEvents: true
        };
    
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
            onClick={() => this.props.onDateClick(dateFns.parse(this.props.cloneDay))}
            >
                <a href = {`/calendar/${dateFns.format(this.props.currentMonth, "YYYY")}/${dateFns.format(this.props.currentMonth, "MMMM")}/${this.props.formattedDate}`} style={{height: '100%', width: '100%'}}>
                    <span className="number">{this.props.formattedDate}</span>
                    <span className="bg">{this.props.formattedDate}</span>
                    {/* <span>You have events</span> */}

                </a>
            </div>



        )
    }
    
// );
}

export default CalendarCell;