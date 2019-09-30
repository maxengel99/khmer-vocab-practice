import React, { Component } from "react";
import { NumberCategory } from "./number-category";
import { DayOfWeekCategory } from "./day-of-week-category";

/*************************************************************************/

const CATEGORY_STATES = {
  number: <NumberCategory />,
  day: <DayOfWeekCategory />
}

function Category(state){
  return(
    <div>
      {CATEGORY_STATES[state]}
    </div>
  );
}

export class AudioFilesWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "number"
    };
  }

  render() {
    return (
      <div>
        {Category(this.state.category)}
      </div>
    );
  }
}
