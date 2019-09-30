import React, { Component } from "react";

/*************************************************************************/

const categoryToFileNameMap = {
  "number": "Numbers",
  "day": "DaysOfTheWeek"
};

function createUrl(category, value) {
  return `https://raw.githubusercontent.com/maxengel99/khmer-number-website/master/src/SoundFiles/${categoryToFileNameMap(category)}/${value}.mp3`;
}

export class AudioBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: createUrl(this.props.category, this.props.value)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        src: createUrl(nextProps.category, nextProps.value)
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
