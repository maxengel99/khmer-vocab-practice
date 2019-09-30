import React, { Component } from "react";
import { AudioBtn } from "./audio-btn";
import Button from "@material-ui/core/Button";

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
      day: daysOfTheWeek[Math.floor(Math.random() * 7)],
      textValue: ""
    };

    this.newAudio = this.newAudio.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  newAudio(ev) {
    ev.preventDefault();
    this.setState({
      day: daysOfTheWeek[Math.floor(Math.random() * 7)],
      textValue: ""
    });
  }

  checkAnswer(ev) {
    if (ev.currentTarget.value !== this.state.day) {
      this.setState({ textValue: "Incorrect" });
    } else {
      this.setState({ textValue: "Correct!!! " });
    }
  }

  render() {
    return (
      <div>
        <AudioBtn
          style={{ cursor: "pointer" }}
          category="day"
          value={this.state.day}
        />
        <div>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="Sunday"
            onClick={this.checkAnswer}
          >
            Sunday
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="Monday"
            onClick={this.checkAnswer}
          >
            Monday
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="Tuesday"
            onClick={this.checkAnswer}
          >
            Tuesday
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="Wednesday"
            onClick={this.checkAnswer}
          >
            Wednesday
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="Thursday"
            onClick={this.checkAnswer}
          >
            Thursday
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="Friday"
            onClick={this.checkAnswer}
          >
            Friday
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="Saturday"
            onClick={this.checkAnswer}
          >
            Saturday
          </Button>
        </div>
        <div>
          <Button style={{ margin: "10px" }} onClick={this.newAudio}>
            New Audio
          </Button>
        </div>
        <p style={{ color: "black" }}>{this.state.textValue}</p>
      </div>
    );
  }
}
