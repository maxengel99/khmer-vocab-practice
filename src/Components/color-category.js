import React, { Component } from "react";
import { AudioBtn } from "./audio-btn";
import Button from "@material-ui/core/Button";
import { colors } from "../Variables/list-of-words";

/*************************************************************************/

export class ColorCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: colors[Math.floor(Math.random() * 13)],
      textValue: ""
    };

    this.newAudio = this.newAudio.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  newAudio(ev) {
    ev.preventDefault();
    this.setState({
      color: colors[Math.floor(Math.random() * 13)],
      textValue: ""
    });
  }

  checkAnswer(ev) {
    if (ev.currentTarget.value !== this.state.color) {
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
          category="color"
          value={this.state.color}
        />
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
