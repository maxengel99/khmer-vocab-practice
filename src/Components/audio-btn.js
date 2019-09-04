import React, { Component } from "react";
import MusicButton from "../Images/musicbutton.png";

/*************************************************************************/

export class AudioBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: new Audio(require("../AudioFiles/" + this.props.randomNum + ".mp3"))
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(ev) {
    ev.preventDefault();
    this.state.audio.play();
  }

  componentWillReceiveProps(nextProps){
    this.setState({ audio: new Audio(require("../AudioFiles/" + nextProps.randomNum + ".mp3")) });
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
