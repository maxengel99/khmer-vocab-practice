import React, { Component } from "react";
import { AudioBtn } from "./audio-btn";
import Button from "@material-ui/core/Button";

/*************************************************************************/

const timeOfDay = [
  "afternoon",
  "evening",
  "morning",
  "night",
  "noon"
];

export class TimeOfDayCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: timeOfDay[Math.floor(Math.random() * 5)],
      textValue: ""
    };

    this.newAudio = this.newAudio.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  newAudio(ev) {
    ev.preventDefault();
    this.setState({
      time: timeOfDay[Math.floor(Math.random() * 5)],
      textValue: ""
    });
  }

  checkAnswer(ev) {
    if (ev.currentTarget.value !== this.state.time) {
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
          category="time"
          value={this.state.time}
        />
        <div>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="morning"
            onClick={this.checkAnswer}
          >
            Morning
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="noon"
            onClick={this.checkAnswer}
          >
            Noon
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="afternoon"
            onClick={this.checkAnswer}
          >
            Afternoon
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="evening"
            onClick={this.checkAnswer}
          >
            Evening
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="night"
            onClick={this.checkAnswer}
          >
            Night
          </Button>
        </div>
        <div>
          <Button style={{ margin: "10px" }} onClick={this.newAudio}>
            New Audio
          </Button>
        </div>
        <div style={{ height: "40px" }}>
          <p style={{ color: "black" }}>{this.state.textValue}</p>
        </div>
      </div>
    );
  }
}