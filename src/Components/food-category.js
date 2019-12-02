import React, { Component } from "react";
import { AudioBtn } from "./audio-btn";
import Button from "@material-ui/core/Button";
import { verbs } from "../Variables/list-of-words";
const images = require.context("../Images/Verbs", true);

/*************************************************************************/


export class FoodCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      curFoods: verbs.sort(() => .5 - Math.random()).slice(0, 8),
      curFoodIndex: Math.floor(Math.random() * 8)
    };

    this.newAudio = this.newAudio.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  newAudio(ev) {
    ev.preventDefault();
    this.setState({
      textValue: "",
      curFoods: verbs.sort(() => .5 - Math.random()).slice(0, 8),
      curFoodIndex: Math.floor(Math.random() * 8)
    });
  }

  checkAnswer = param => {
    if (param !== this.state.curFoods[this.state.curFoodIndex]) {
      this.setState({ textValue: "Incorrect" });
    } else {
      this.setState({ textValue: "Correct!!! " });
    }
  };

  createVerbImages = () => {
      let firstHalfImages = [];
      for(let i = 0; i < 4; i++){
        firstHalfImages.push(<img src={images(`./${this.state.curFoods[i]}.jpg`)} key={i} style={{width: "140px", margin: "10px"}} onClick={() => this.checkAnswer(this.state.curFoods[i])} />);
      }

      let secondHalfImages = [];
      for(let i = 4; i < 8; i++){
        secondHalfImages.push(<img src={images(`./${this.state.curFoods[i]}.jpg`)} key={i} style={{width: "140px", margin: "10px"}} onClick={() => this.checkAnswer(this.state.curFoods[i])} />);
      }

      return <div><div>{firstHalfImages}</div><div>{secondHalfImages}</div></div>;
  }

  render() {

    return (
      <div>
        <AudioBtn
          style={{ cursor: "pointer" }}
          category="verb"
          value={this.state.curFoods[this.state.curFoodIndex]}
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