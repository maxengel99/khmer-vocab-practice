import React, { Component } from "react";

/*************************************************************************/

function createUrl(num) {
  return `https://raw.githubusercontent.com/maxengel99/khmer-number-website/master/src/AudioFiles/${num}.mp3`;
}

export class AudioBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: createUrl(this.props.randomNum)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        src: createUrl(nextProps.randomNum)
      },
      function() {
        this.refs.audio.pause();
        this.refs.audio.load();
      }
    );
  }

  render() {
    return (
      <div>
          <audio controls ref="audio">
            <source src={this.state.src} />
          </audio>
      </div>
    );
  }
}
