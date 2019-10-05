import React, { Component } from "react";
import { AudioBtn } from "./audio-btn";
import Button from "@material-ui/core/Button";
import { verbs } from "../Variables/list-of-words";
const images = require.context("../Images/Verbs", true);

/*************************************************************************/


export class VerbCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      curVerbs: verbs.sort(() => .5 - Math.random()).slice(0, 8),
      curVerbIndex: Math.floor(Math.random() * 8)
    };

    this.newAudio = this.newAudio.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  newAudio(ev) {
    ev.preventDefault();
    this.setState({
      textValue: "",
      curVerbs: verbs.sort(() => .5 - Math.random()).slice(0, 8),
      curVerbIndex: Math.floor(Math.random() * 8)
    });
  }

  checkAnswer = param => {
    if (param !== this.state.curVerbs[this.state.curVerbIndex]) {
      this.setState({ textValue: "Incorrect" });
    } else {
      this.setState({ textValue: "Correct!!! " });
    }
  };

  createVerbImages = () => {
      let firstHalfImages = [];
      for(let i = 0; i < 4; i++){
        firstHalfImages.push(<img src={images(`./${this.state.curVerbs[i]}.jpg`)} key={i} style={{width: "140px", margin: "10px"}} onClick={() => this.checkAnswer(this.state.curVerbs[i])} />);
      }

      let secondHalfImages = [];
      for(let i = 4; i < 8; i++){
        secondHalfImages.push(<img src={images(`./${this.state.curVerbs[i]}.jpg`)} key={i} style={{width: "140px", margin: "10px"}} onClick={() => this.checkAnswer(this.state.curVerbs[i])} />);
      }

      return <div><div>{firstHalfImages}</div><div>{secondHalfImages}</div></div>;
  }

  render() {

    return (
      <div>
        <AudioBtn
          style={{ cursor: "pointer" }}
          category="verb"
          value={this.state.curVerbs[this.state.curVerbIndex]}
        />
        <div>
        {this.createVerbImages()}
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