import React, { Component } from "react";
import { AudioBtn } from "./audio-btn";
import Button from "@material-ui/core/Button";
import morning from "../Images/morning.jpg";
import noon from "../Images/noon.jpg";
import afternoon from "../Images/afternoon.jpg";
import evening from "../Images/evening.jpg";
import night from "../Images/night.jpg";
import { verbs } from "../Variables/list-of-words";

/*************************************************************************/

const verbList = ["afternoon", "evening", "morning", "night", "noon"];

export class VerbCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verb: verbList[Math.floor(Math.random() * 5)],
      textValue: "",
      curVerbs: verbs.sort(() => .5 - Math.random()).slice(0, 8)
    };

    this.newAudio = this.newAudio.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  newAudio(ev) {
    ev.preventDefault();
    this.setState({
      verb: verbList[Math.floor(Math.random() * 5)],
      textValue: ""
    });
  }

  checkAnswer = param => {
    if (param !== this.state.verb) {
      this.setState({ textValue: "Incorrect" });
    } else {
      this.setState({ textValue: "Correct!!! " });
    }
    console.log(param);
  };

  createVerbImages = () => {
      let iamges = [];
      
  }

  render() {

    return (
      <div>
        <AudioBtn
          style={{ cursor: "pointer" }}
          category="time"
          value={this.state.verb}
        />
        <div>
          <img
            src={morning}
            alt="morning"
            onClick={e => this.checkAnswer("morning")}
            style={{ width: "100px", margin: "10px", borderRadius: "25px" }}
          />
          <img
            src={noon}
            alt="noon"
            onClick={e => this.checkAnswer("noon")}
            style={{ width: "100px", margin: "10px", borderRadius: "25px" }}
          />
          <img
            src={afternoon}
            alt="afternoon"
            onClick={e => this.checkAnswer("afternoon")}
            style={{ width: "100px", margin: "10px", borderRadius: "25px" }}
          />
          <img
            src={evening}
            alt="evening"
            onClick={e => this.checkAnswer("evening")}
            style={{ width: "100px", margin: "10px", borderRadius: "25px" }}
          />
          <img
            src={night}
            alt="night"
            onClick={e => this.checkAnswer("night")}
            style={{ width: "100px", margin: "10px", borderRadius: "25px" }}
          />
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