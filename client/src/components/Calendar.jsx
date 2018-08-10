import React from "react";
import dateFns from "date-fns";
import Space from "./Space";
import {Link, Redirect} from "react-router-dom";
import CalendarCell from "./CalendarCell/CalendarCell";

class Calendar extends React.Component {

    state = {
        currentMonth: new Date(),
        selectedDate: new Date(),
        // isClicked: false
    };

    // Renders the header of the calendar, which contains the current month and year
    // as well as "previous month" and "next month" arrows.
    renderHeader() {
        const dateFormat = "MMMM YYYY";
        return (
            <div>
                <div className="header row flex-middle">
                    <div className="col col-start">
                        <div className="icon" onClick={this.prevMonth}>
                        chevron_left
                        </div>
                    </div>
                    <div className="col col-center d-flex flex-column">
                        <span>
                        {dateFns.format(this.state.currentMonth, dateFormat)}{"\n"}
                        </span>
                        {/* <span>{"\n"}</span> */}
                        {/* <span>Double-click a day</span>
                        <span>to add an event.</span> */}
                    </div>
                    <div className="col col-end" onClick={this.nextMonth}>
                        <div className="icon">chevron_right</div>
                    </div>
                </div>
                <div className="row mt-3 mb-4">
                    <div className="col-12 text-center">
                        <h5>Click a day to add an event.</h5>
                    </div>
                </div>
            </div>
        );
    }

    // Renders the days of the week at the top of the calendar
    renderDays() {
        const dateFormat = "dddd";
        const days = [];

        // The start of the week
        let startDate = dateFns.startOfWeek(this.state.currentMonth);
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    }

    // Renders the "cells" of the calendar.
    renderCells() {
        const { currentMonth, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);      // The start of the month
        const monthEnd = dateFns.endOfMonth(monthStart);            // The end of the month
        const startDate = dateFns.startOfWeek(monthStart);          // Days from previous month that complete our starting week
        const endDate = dateFns.endOfWeek(monthEnd);                // Days from next month that end the last week of our currently selected month

        const dateFormat = "D";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        let cellIsClicked = false;

        // Start at the startDate
        // While the current day in the loop is less than or equal to the "endDate" constant
        while (day <= endDate) {

            // Loops through seven times. display div boxes for each of the days of the week.
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;

                // Pushes the following jsx into the "days" array
                days.push(
                    
                    // This is one day box.
                    <CalendarCell 
                    day={day} 
                    formattedDate={formattedDate} 
                    monthStart={monthStart}
                    currentMonth={currentMonth}
                    selectedDate={this.state.selectedDate}
                    onDateClick={this.onDateClick(day)}
                    
                    
                    />

                );

                // Change the "day" variable
                // Adds one day to the "day" variable.
                // Goes to next iteration.
                day = dateFns.addDays(day, 1);
            }

            // After looping seven times.
            // Pushes the cells in the "days" array to a row in the calendar
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );

            // Clears the "days" array of cells.
            days = [];
        }

        // Return all the rows of the calendar
        return <div className="body">{rows}</div>;

    }

    // // What happens when user clicks a certain day on the calendar
    // onDateClick = day => {
    //     this.setState({
    //         selectedDate: day,
    //         // isClicked: true
    //     });
    //     this.cellIsClicked = true;
    // }

    // Move to the next month when the "next" arrow is pressed.
    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    }

    // Move to the previous month when the "previous" arrow is pressed.
    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    }

    // checkForEvents = () => {
    //     if (this.parentNode.getAttribute("hasEvent") === true) {
    //         this.displayCellEvent()
    //     }
    // }

    // // use this later
    // displayCellEvent = () => {
    //     return("test")
    // }

    // setAttrToTrue = () => {
    //     this.parentNode.setAttribute("hasEvent", true);
    // }



    // toDayEvents = (day) => {
    //     // return (<Redirect to={"/calendar/" + day} />)
    //     // return (<Redirect to={`/calendar/${day}`} />)

    //     // <Redirect to={"/calendar/" + day} />
    //     console.log("clicked cell");

    //     <Redirect to={`/calendar/${day}`} />
    // }

    // toDayEvents = (selected, day) => {
    //     if (selected) {
    //         console.log("toDayEvents run");
    //         return (
    //         <Link to={`/calendar/${day}`}>
    //             <span className="number">{day}</span>
    //             <span className="bg">{day}</span>
    //         </Link>
    //         )
    //     }

    //     else {
    //         return (
    //             <div>
    //                 <span className="number">{day}</span>
    //                 <span className="bg">{day}</span>
    //             </div>
    //         )
    //     }
    // }

    render() {
        return (
          <div className="calendar">
            {this.renderHeader()}
            {this.renderDays()}
            {this.renderCells()}
          </div>
        );
    }
}

export default Calendar;