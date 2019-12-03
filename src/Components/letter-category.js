import React, { Component } from "react";
import { AudioBtn } from "./audio-btn";
import { consonants, vowels } from "../Variables/list-of-words";
import Button from "@material-ui/core/Button";

/*************************************************************************/

const first_series_consonants = [
  "ក",
  "ខ",
  "ង៉",
  "ច",
  "ឆ",
  "ញ៉",
  "ដ",
  "ថ",
  "ឋ"
]

const second_series_consonants = [
  "គ",
  "ឃ",
  "ង",
  "ជ",
  "ឈ",
  "ញ",
  "ឌ",
  "ធ",
  "ឍ"
]

const vowel_to_phonetic_map_first = {
  "": "",
  "ា": "aa",
  "ិ": "e",
  "ី": "əy",
  "ឹ": "ə",
  "ឺ": "əɨ",
  "ុ": "o",
  "ូ": "ou",
  "ួ": "uə"
}

const vowel_to_phonetic_map_second = {
  "": "",
  "ា": "ie",
  "ិ": "i",
  "ី": "ii",
  "ឹ": "ɨ",
  "ឺ": "ɨɨ",
  "ុ": "u",
  "ូ": "uu",
  "ួ": "uə"
}

export class LetterCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curConsonant: consonants[Math.floor(Math.random() * consonants.length)],
      curVowel: vowels[Math.floor(Math.random() * vowels.length)],
      phonetic: false
    }

    this.nextLetter = this.nextLetter.bind(this);
    this.showPhonetic = this.showPhonetic.bind(this);
  }

  nextLetter(ev) {
    ev.preventDefault();
    this.setState({
      curConsonant: consonants[Math.floor(Math.random() * consonants.length)],
      curVowel: vowels[Math.floor(Math.random() * vowels.length)] ,
      phonetic: false
    });
  }

  showPhonetic(ev){
    ev.preventDefault();
    this.setState({
      phonetic: true
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
        <Button style={{ margin: "10px" }} onClick={this.showPhonetic}>
          Show Phonetic
        </Button>
        {this.state.phonetic ? (
          <div style={{color: "black", margin: "10px"}}>
            {first_series_consonants.includes(this.state.curConsonant) ?
            vowel_to_phonetic_map_first[this.state.curVowel] :
            vowel_to_phonetic_map_second[this.state.curVowel]
            }
          </div>
        ) : null}
      </div>
    );
  }
}
