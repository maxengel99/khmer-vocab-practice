import React, { Component } from "react";

/*************************************************************************/

const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

export class DayOfWeekCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: daysOfTheWeek[Math.floor(Math.random() * 7)]
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.day}</p>
      </div>
    );
  }
}
