"use strict";

import React, { Component } from "react";
import { AudioBtn } from "./audio-btn";

/*************************************************************************/

export class AudioFilesWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <p>Hello World</p>
            <AudioBtn />
        </div>
    );
  }
}