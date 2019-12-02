import React, { Component } from "react";
import { AudioBtn } from "./audio-btn";
import { consonants, vowels } from "../Variables/list-of-words";
import Button from "@material-ui/core/Button";

/*************************************************************************/

export class LetterCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curConsonant: consonants[Math.floor(Math.random() * consonants.length)],
      curVowel: vowels[Math.floor(Math.random() * vowels.length)]
    }

    this.nextLetter = this.nextLetter.bind(this);
  }

  nextLetter(ev) {
    ev.preventDefault();
    this.setState({
      curConsonant: consonants[Math.floor(Math.random() * consonants.length)],
      curVowel: vowels[Math.floor(Math.random() * vowels.length)] 
    });
  }

  render() {
    return (
      <div>
        <div style={{ color: "black", margin: "10px", fontSize: "100px"}}>{this.state.curConsonant + this.state.curVowel}</div>
        <AudioBtn
          style={{ cursor: "pointer" }}
          category="letter"
          value={this.state.curConsonant + this.state.curVowel}
        />
        <Button style={{ margin: "10px" }} onClick={this.nextLetter}>
          Next
        </Button>
      </div>
    );
  }
}
