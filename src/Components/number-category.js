import React, { Component } from "react";
import { AudioBtn } from "./audio-btn";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

/*************************************************************************/

export class NumberCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      textValue: "",
      answer: "",
      startNum: 0,
      endNum: 10
    };

    this.number = Math.floor(
      Math.random() * (this.state.endNum + 1 - this.state.startNum) +
        this.state.startNum
    );

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.giveUp = this.giveUp.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
  }

  handleChange(ev) {
    this.setState({ value: ev.target.value });
  }

  checkAnswer(ev) {
    ev.preventDefault();
    if (this.number !== parseInt(this.state.value)) {
      this.setState({ textValue: "Incorrect" });
    } else {
      this.setState({ textValue: "Correct!!!" });
    }
  }

  handleClick(ev) {
    ev.preventDefault();
    this.setState({
      textValue: "",
      value: "",
      answer: ""
    });

    this.number = Math.floor(
      Math.random() * (this.state.endNum + 1 - this.state.startNum) +
        this.state.startNum
    );
  }

  giveUp(ev) {
    ev.preventDefault();
    this.setState({ answer: this.number });
  }

  handleStartChange(ev) {
    this.setState({ startNum: ev.target.value });
  }

  handleEndChange(ev) {
    this.setState({ endNum: ev.target.value });
  }

  render() {
    return (
      <div>
        <AudioBtn style={{ cursor: "pointer" }} category="number" value={this.number} />
        <TextField
          id="standard-number"
          label="Number"
          value={this.state.value}
          onChange={this.handleChange}
          type="number"
          InputLabelProps={{ shrink: true }}
          margin="normal"
          variant="filled"
        />
        <div>
          <TextField
            id="beginning-number"
            label="Start"
            value={this.state.startNum}
            onChange={this.handleStartChange}
            type="number"
            InputLabelProps={{ shrink: true }}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="beginning-number"
            label="Start"
            value={this.state.endNum}
            onChange={this.handleEndChange}
            type="number"
            InputLabelProps={{ shrink: true }}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            onClick={this.checkAnswer}
          >
            Check Answer
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            onClick={this.giveUp}
          >
            I Give Up
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            onClick={this.handleClick}
          >
            New Number
          </Button>
        </div>
        <p style={{ color: "black" }}>{this.state.textValue}</p>
        <p style={{ color: "black" }}>{this.state.answer}</p>
      </div>
    );
  }
}
