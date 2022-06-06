import classes from "./TimeSliderDesktop.module.css";
/*Eventually the title will be something like this Top {searchType} this {timePeriod} and the values will be taken from the value of the buttons (filter options) chosen by the user */

const TimeSliderDesktop = (props) => {
  var results = props.resultsType;
  var time = props.timeFrame;
  return (
    <div className={classes.contentContainer}>
      <div className={classes.timeFrameContainer}>
        <div className={classes.timeFrame}>
          Top {results == "tracks" ? "Tracks" : "Artists"}{" "}
          {time == "short_term"
            ? "This Month"
            : time == "medium_term"
            ? " of the Past Six Months"
            : "of All Time"}
        </div>
      </div>
    </div>
  );
};

export default TimeSliderDesktop;
