import React, { Component } from "react";
import { AudioBtn } from "./audio-btn";

/*************************************************************************/

export class AudioFilesWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Math.floor(Math.random() * 10) + 1
    };

    this.handleClick = this.handleClick.bind(this);
  }

  updateNumber = (numValue) => {
    this.setState({ number: numValue });
  }

  handleClick(ev){
    ev.preventDefault();
    this.setState({ number: Math.floor(Math.random() * 10) + 1});
  }
  
  render() {
    return (
        <div>
            <p>Hello World</p>
            <AudioBtn randomNum={this.state.number} />
            <button onClick={this.handleClick}>New Number</button>
        </div>
    );
  }
}