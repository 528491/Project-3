import React from "react";
import dateFns from "date-fns";

class TestCalendar extends React.Component {

    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };

    renderHeader() {
        const dateFormat = "MMMM YYYY";
        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>
                    chevron_left
                    </div>
                </div>
                <div className="col col-center">
                    <span>
                    {dateFns.format(this.state.currentMonth, dateFormat)}
                    </span>
                </div>
                <div className="col col-end" onClick={this.nextMonth}>
                    <div className="icon">chevron_right</div>
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
                    <div
                        className={`col cell ${

                        // If it is not the case that the day and the start of the month are equal,
                        // set className to "disabled".
                        // Otherwise, if the day and the selected date are equal,
                        // set className to "selected."
                        // Otherwise, don't make a new className.
                        !dateFns.isSameMonth(day, monthStart)
                            ? "disabled"
                            : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                        }`}

                        key={day}
                        onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                    >
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                    </div>

                );

                // Change the "day" variable
                // Adds one day to the "day" variable.
                // Goes to next iteration.
                day = dateFns.addDays(day, 1);
            }

            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );

            days = [];
        }

        // Return all the rows of the calendar
        return <div className="body">{rows}</div>;

    }

    onDateClick = day => {
        this.setState({
            selectedDate: day
        });
    }

    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    }
    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    }

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

export default TestCalendar;