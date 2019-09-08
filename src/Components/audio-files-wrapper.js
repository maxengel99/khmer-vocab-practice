import React, { Component } from "react";
import { AudioBtn } from "./audio-btn";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

/*************************************************************************/

export class AudioFilesWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Math.floor(Math.random() * 1000) + 1,
      value: "",
      textValue: "",
      answer: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.giveUp = this.giveUp.bind(this);
  }

  handleChange(ev) {
    this.setState({ value: ev.target.value });
  }

  checkAnswer(ev) {
    ev.preventDefault();
    if (this.state.number != parseInt(this.state.value)) {
      this.setState({ textValue: "Incorrect" });
    } else {
      this.setState({ textValue: "Correct" });
    }
  }

  handleClick(ev) {
    ev.preventDefault();
    this.setState({
      number: Math.floor(Math.random() * 1000) + 1,
      textValue: "",
      value: "",
      answer: ""
    });
  }

  giveUp(ev) {
    ev.preventDefault();
    this.setState({ answer: this.state.number });
  }

  render() {
    return (
      <div>
        <AudioBtn style={{ cursor: "pointer" }} randomNum={this.state.number} />
        <TextField
          id="standard-number"
          label="Number"
          value={this.state.value}
          onChange={this.handleChange}
          type="number"
          InputLabelProps={{ shrink: true }}
          margin="normal"
        />
        <Button variant="contained" onClick={this.checkAnswer}>
          Check Answer
        </Button>
        <p>{this.state.textValue}</p>
        <Button variant="contained" onClick={this.giveUp}>
          I Give Up
        </Button>
        <Button variant="contained" onClick={this.handleClick}>
          New Number
        </Button>
        <p>{this.state.answer}</p>
      </div>
    );
  }
}
