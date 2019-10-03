import React, { Component } from "react";
import { AudioBtn } from "./audio-btn";
import Button from "@material-ui/core/Button";

/*************************************************************************/

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export class MonthCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: months[Math.floor(Math.random() * 12)],
      textValue: ""
    };

    this.newAudio = this.newAudio.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  newAudio(ev) {
    ev.preventDefault();
    this.setState({
      month: months[Math.floor(Math.random() * 12)],
      textValue: ""
    });
  }

  checkAnswer(ev) {
    if (ev.currentTarget.value !== this.state.month) {
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
          category="month"
          value={this.state.month}
        />
        <div>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="January"
            onClick={this.checkAnswer}
          >
            January
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="February"
            onClick={this.checkAnswer}
          >
            February
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="March"
            onClick={this.checkAnswer}
          >
            March
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="April"
            onClick={this.checkAnswer}
          >
            April
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="May"
            onClick={this.checkAnswer}
          >
            May
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="June"
            onClick={this.checkAnswer}
          >
            June
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="July"
            onClick={this.checkAnswer}
          >
            July
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="August"
            onClick={this.checkAnswer}
          >
            August
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="September"
            onClick={this.checkAnswer}
          >
            September
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="October"
            onClick={this.checkAnswer}
          >
            October
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="November"
            onClick={this.checkAnswer}
          >
            November
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            value="December"
            onClick={this.checkAnswer}
          >
            December
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
