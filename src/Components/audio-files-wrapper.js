import React, { Component } from "react";
import { NumberCategory } from "./number-category";
import { DayOfWeekCategory } from "./day-of-week-category";
import { MonthCategory } from "./month-category.js";
import { TimeOfDayCategory } from "./time-of-day-category.js";
import { VerbCategory } from "./verb-category.js";
import { ColorCategory } from "./color-category.js";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

/*************************************************************************/

const CATEGORY_STATES = {
  number: <NumberCategory />,
  day: <DayOfWeekCategory />,
  month: <MonthCategory />,
  time: <TimeOfDayCategory />,
  verb: <VerbCategory />,
  color: <ColorCategory />
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
              <Button
                variant="outlined"
                style={{ margin: "10px" }}
                value="month"
                onClick={this.changeCategory}
              >
                Months
              </Button>
              <Button
                variant="outlined"
                style={{ margin: "10px" }}
                value="time"
                onClick={this.changeCategory}
              >
                Time of the Day
              </Button>
              <Button
                variant="outlined"
                style={{ margin: "10px" }}
                value="verb"
                onClick={this.changeCategory}
              >
                Verbs
              </Button>
              <Button
                variant="outlined"
                style={{ margin: "10px" }}
                value="color"
                onClick={this.changeCategory}
                >
                  Colors
                </Button>
            </Toolbar>
          </AppBar>
        </div>
        <div>{Category(this.state.category)}</div>
      </div>
    );
  }
}
