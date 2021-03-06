import classes from "./TimeSliderMobile.module.css";
/*Eventually the title will be something like this Top {searchType} this {timePeriod} and the values will be taken from the value of the buttons (filter options) chosen by the user */

const TimeSliderMobile = (props) => {
  var results = props.resultsType;
  var time = props.timeFrame;
  return (
    <div className={classes.contentContainer}>
      <div className={classes.timeFrameContainer}>
        <div className={classes.timeFrame}>
          Top {results == "tracks" ? "Tracks" : "Artists"}{" "}
        </div>
        <div className={classes.timeFrameSmall}>
          {time == "short_term"
            ? "This Month"
            : time == "medium_term"
            ? "Past Six Months"
            : "All Time"}
        </div>
      </div>
    </div>
  );
};

export default TimeSliderMobile;
