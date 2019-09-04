"use strict";

import React, { Component } from "react";
import MusicButton from "../Images/musicbutton.png";
import Music from "../AudioFiles/7.mp3";

/*************************************************************************/

export class AudioBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      src: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(ev) {
    ev.preventDefault();
    var audio = new Audio(Music);
    let audioName = require("../AudioFiles/" + this.state.number + ".mp3");
    var testAudio = new Audio(audioName);
    testAudio.play();
  }

  componentDidMount() {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
    this.setState({ number: randomNum });
    this.setState({ src: "../AudioFiles/" + randomNum + ".mp3"});
  }
  render() {
    return (
      <div>
        <img src={MusicButton} onClick={this.handleClick} />
          <audio src={"../AudioFiles/6.mp3"} />
      </div>
    );
  }
}
