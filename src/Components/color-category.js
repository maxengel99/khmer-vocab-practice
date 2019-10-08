import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { AudioBtn } from "./audio-btn";
import Button from "@material-ui/core/Button";
import { colors } from "../Variables/list-of-words";

/*************************************************************************/

export class ColorCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: colors[Math.floor(Math.random() * 13)],
      textValue: "",
      hoveredColor: " "
    };

    this.newAudio = this.newAudio.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  newAudio(ev) {
    ev.preventDefault();
    this.setState({
      color: colors[Math.floor(Math.random() * 13)],
      textValue: ""
    });
  }

  checkAnswer = param => {
    if (param !== this.state.color) {
      this.setState({ textValue: "Incorrect" });
    } else {
      this.setState({ textValue: "Correct!!! " });
    }
  };

  onMouseEnter = param => {
    this.setState({ hoveredColor: param });
  };

  onMouseLeave() {
    this.setState({ hoveredColor: "" });
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
          <Paper style={{ marginTop: "5px", height: "120px" }}>
            <div>
              <div
                style={{
                  backgroundColor: "yellow",
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  display: "inline-block",
                  border: "solid gray 1px",
                  borderRadius: '10px'
                }}
                onMouseOver={() => this.onMouseEnter("yellow")}
                onMouseLeave={() => this.onMouseLeave()}
                onClick={() => this.checkAnswer("yellow")}
              ></div>
              <div
                style={{
                  backgroundColor: "red",
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  display: "inline-block",
                  border: "solid gray 1px",
                  borderRadius: '10px'
                }}
                onMouseOver={() => this.onMouseEnter("red")}
                onMouseLeave={() => this.onMouseLeave()}
                onClick={() => this.checkAnswer("red")}
              ></div>
              <div
                style={{
                  backgroundColor: "white",
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  display: "inline-block",
                  border: "solid gray 1px",
                  borderRadius: '10px'
                }}
                onMouseOver={() => this.onMouseEnter("white")}
                onMouseLeave={() => this.onMouseLeave()}
                onClick={() => this.checkAnswer("white")}
              ></div>
              <div
                style={{
                  backgroundColor: "black",
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  display: "inline-block",
                  border: "solid gray 1px",
                  borderRadius: '10px'
                }}
                onMouseOver={() => this.onMouseEnter("black")}
                onMouseLeave={() => this.onMouseLeave()}
                onClick={() => this.checkAnswer("black")}
              ></div>
              <div
                style={{
                  backgroundColor: "blue",
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  display: "inline-block",
                  border: "solid gray 1px",
                  borderRadius: '10px'
                }}
                onMouseOver={() => this.onMouseEnter("blue")}
                onMouseLeave={() => this.onMouseLeave()}
                onClick={() => this.checkAnswer("blue")}
              ></div>
              <div
                style={{
                  backgroundColor: "green",
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  display: "inline-block",
                  border: "solid gray 1px",
                  borderRadius: '10px'
                }}
                onMouseOver={() => this.onMouseEnter("green")}
                onMouseLeave={() => this.onMouseLeave()}
                onClick={() => this.checkAnswer("green")}
              ></div>
              <div
                style={{
                  backgroundColor: "purple",
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  display: "inline-block",
                  border: "solid gray 1px",
                  borderRadius: '10px'
                }}
                onMouseOver={() => this.onMouseEnter("purple")}
                onMouseLeave={() => this.onMouseLeave()}
                onClick={() => this.checkAnswer("purple")}
              ></div>
              <div
                style={{
                  backgroundColor: "brown",
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  display: "inline-block",
                  border: "solid gray 1px",
                  borderRadius: '10px'
                }}
                onMouseOver={() => this.onMouseEnter("brown")}
                onMouseLeave={() => this.onMouseLeave()}
                onClick={() => this.checkAnswer("brown")}
              ></div>
              <div
                style={{
                  backgroundColor: "orange",
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  display: "inline-block",
                  border: "solid gray 1px",
                  borderRadius: '10px'
                }}
                onMouseOver={() => this.onMouseEnter("orange")}
                onMouseLeave={() => this.onMouseLeave()}
                onClick={() => this.checkAnswer("orange")}
              ></div>
              <div
                style={{
                  backgroundColor: "gray",
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  display: "inline-block",
                  border: "solid gray 1px",
                  borderRadius: '10px'
                }}
                onMouseOver={() => this.onMouseEnter("gray")}
                onMouseLeave={() => this.onMouseLeave()}
                onClick={() => this.checkAnswer("gray")}
              ></div>
              <div
                style={{
                  backgroundColor: "gold",
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  display: "inline-block",
                  border: "solid gray 1px",
                  borderRadius: '10px'
                }}
                onMouseOver={() => this.onMouseEnter("gold")}
                onMouseLeave={() => this.onMouseLeave()}
                onClick={() => this.checkAnswer("gold")}
              ></div>
              <div
                style={{
                  backgroundColor: "silver",
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  display: "inline-block",
                  border: "solid gray 1px",
                  borderRadius: '10px'
                }}
                onMouseOver={() => this.onMouseEnter("silver")}
                onMouseLeave={() => this.onMouseLeave()}
                onClick={() => this.checkAnswer("silver")}
              ></div>
              <div
                style={{
                  backgroundColor: "pink",
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  display: "inline-block",
                  border: "solid gray 1px",
                  borderRadius: '10px'
                }}
                onMouseOver={() => this.onMouseEnter("pink")}
                onMouseLeave={() => this.onMouseLeave()}
                onClick={() => this.checkAnswer("pink")}
              ></div>
            </div>
            <p>{this.state.hoveredColor}</p>
          </Paper>
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
