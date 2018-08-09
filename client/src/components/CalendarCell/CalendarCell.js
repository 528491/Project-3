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

const CalendarCell = (props) => (
    // This is one day box.
    <div
        className={`col cell ${

        // If it is not the case that the day and the start of the month are equal,
        // set className to "disabled".
        // Otherwise, if the day and the selected date are equal,
        // set className to "selected."
        // Otherwise, don't make a new className.
        !dateFns.isSameMonth(props.day, props.monthStart)
            ? "disabled"
            : dateFns.isSameDay(props.day, props.selectedDate) ? "selected" : ""
        }`}

        key={props.day}
        onClick={() => this.onDateClick(dateFns.parse(props.cloneDay))}
    >
        <a href = {`/calendar/${dateFns.format(props.currentMonth, "YYYY")}/${dateFns.format(props.currentMonth, "MMMM")}/${props.formattedDate}`} style={{height: '100%', width: '100%'}}>
            <span className="number">{props.formattedDate}</span>
            <span className="bg">{props.formattedDate}</span>
            {/* <span>You have events</span> */}

        </a>
    </div>
);

export default CalendarCell;