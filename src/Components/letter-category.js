import React, { Component } from "react";
import { AudioBtn } from "./audio-btn";
import { consonants, vowels } from "../Variables/list-of-words";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

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
  "ឋ",
  "ណ",
  "ត"
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
  "ឍ",
  "ន",
  "ទ"
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
  "ួ": "uə",
  "ើ": "aə",
  "ឿ": "ɨə"
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
  "ួ": "uə",
  "ើ": "əə",
  "ឿ": "ɨə"
}

export class LetterCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curConsonant: consonants[Math.floor(Math.random() * consonants.length)],
      curVowel: vowels[Math.floor(Math.random() * vowels.length)],
      phonetic: false,
      checked: false
    }

    this.nextLetter = this.nextLetter.bind(this);
    this.showPhonetic = this.showPhonetic.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(){
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  }


  render() {

    return (
      <div>
        <Checkbox 
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        <div style={{ color: "black", margin: "10px", fontSize: "100px"}}>{this.state.curConsonant + (this.state.checked ? "" : this.state.curVowel)}</div>
        <AudioBtn
          style={{ cursor: "pointer" }}
          category="letter"
          value={this.state.curConsonant + (this.state.checked ? "" : this.state.curVowel)}
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
