import { Button, ToggleButtonGroup, Dropdown } from "react-bootstrap";
import { useState } from "react";
import classes from "./AdjustFiltersDesktop.module.css";

const AdjustFiltersDesktop = (props) => {
  const [results, setResults] = useState("Songs");
  const [time, setTime] = useState("Month");
  const [dropDownTitle, setDropDownTitle] = useState("Select Time Frame");

  console.log(results, time);

  const updateTimeFrame = (e) => {
    setTime(e.currentTarget.id);
    setDropDownTitle(e.currentTarget.title);
  };

  const handleSubmit = () => {
    props.searchArtists(results, time);
  };

  return (
    <div className={classes.background}>
      <div className={classes.titleContainer}>
        <div className={classes.title}>Adjust Filters</div>
      </div>
      <div className={classes.resultsTypeContainer}>
        <div className={classes.resultsTypeTitle}>Results Type</div>
        <div className={classes.resultsTypeButtonContainer}>
          <ToggleButtonGroup
            name="resultsType"
            type="radio"
            defaultValue={null}
          >
            <Button
              id={"tg-btn-1"}
              variant="dark"
              type="radio"
              value={"tracks"}
              title={"Tracks"}
              onClick={(e) => setResults(e.currentTarget.value)}
            >
              Songs
            </Button>
            <Button
              id={"tg-btn-2"}
              variant="dark"
              type="radio"
              title={"Artists"}
              value={"artists"}
              onClick={(e) => setResults(e.currentTarget.value)}
            >
              Artists
            </Button>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className={classes.timeFrameContainer}>
        <div className={classes.timeFrameTitle}>Time Frame</div>
        <div className={classes.timeFrameButtonContainer}>
          <Dropdown>
            <Dropdown.Toggle variant="dark">{dropDownTitle}</Dropdown.Toggle>

            <Dropdown.Menu className={classes.dropdownItems}>
              <Dropdown.Item
                title={"This Month"}
                id="short_term"
                onClick={updateTimeFrame}
              >
                This Month
              </Dropdown.Item>
              <Dropdown.Item
                title={"Past Six Months"}
                id="medium_term"
                onClick={updateTimeFrame}
              >
                Past Six Months
              </Dropdown.Item>
              <Dropdown.Item
                title={"All Time"}
                id="long_term"
                onClick={updateTimeFrame}
              >
                All Time
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className={classes.applyChangesContainer}>
        <Button
          id="btn-apply-changes"
          variant="dark"
          className={classes.btnApplyChanges}
          onClick={handleSubmit}
        >
          Apply Changes
        </Button>
      </div>
    </div>
  );
};

export default AdjustFiltersDesktop;
