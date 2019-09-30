import React, { Component } from "react";
import { NumberCategory } from "./number-category";
import { DayOfWeekCategory } from "./day-of-week-category";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

/*************************************************************************/

const CATEGORY_STATES = {
  number: <NumberCategory />,
  day: <DayOfWeekCategory />
};

function Category(state) {
  return <div>{CATEGORY_STATES[state]}</div>;
}

export class AudioFilesWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "number"
    };

    this.changeCategory = this.changeCategory.bind(this);
  }

  changeCategory(ev) {
    this.setState({ category: ev.currentTarget.value });
  }

  render() {
    return (
      <div>
        <div>
          <AppBar>
            <Toolbar>
              <Button
                variant="outlined"
                style={{ margin: "10px" }}
                value="number"
                onClick={this.changeCategory}
              >
                Numbers
              </Button>
              <Button
                variant="outlined"
                style={{ margin: "10px" }}
                value="day"
                onClick={this.changeCategory}
              >
                Days of the Week
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <div>{Category(this.state.category)}</div>
      </div>
    );
  }
}
