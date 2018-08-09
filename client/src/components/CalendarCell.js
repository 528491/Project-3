import React from "react";
import dateFns from "date-fns";
import Space from "./Space";
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
        <span className="number">{props.formattedDate}</span>
        <span className="bg">{props.formattedDate}</span>
    </div>
);

export default CalendarCell;