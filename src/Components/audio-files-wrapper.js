import React, { Component } from "react";
import { AudioBtn } from "./audio-btn";

/*************************************************************************/

export class AudioFilesWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Math.floor(Math.random() * 10) + 1,
      value: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  updateNumber = (numValue) => {
    this.setState({ number: numValue });
  }

  handleChange(ev){
    this.setState({ value: ev.target.value });
  }

  checkAnswer(ev){
    ev.preventDefault();
    if(this.state.number != parseInt(this.state.value)){
      console.log("wrong");
    } else {
      console.log("correct");
    }
  }

  handleClick(ev){
    ev.preventDefault();
    this.setState({ number: Math.floor(Math.random() * 10) + 1});
  }
  
  render() {
    return (
        <div>
            <AudioBtn randomNum={this.state.number} />
            <button onClick={this.handleClick}>New Number</button>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <button onClick={this.checkAnswer}>Check Answer</button>
        </div>
    );
  }
}