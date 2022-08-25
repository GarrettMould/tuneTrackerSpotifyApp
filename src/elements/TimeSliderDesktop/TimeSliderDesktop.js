import classes from "./TimeSliderDesktop.module.css";
import { Playlist } from "phosphor-react";
/*Eventually the title will be something like this Top {searchType} this {timePeriod} and the values will be taken from the value of the buttons (filter options) chosen by the user */

const TimeSliderDesktop = (props) => {
  var results = props.resultsType;
  var time = props.timeFrame;
  return (
    <div className={classes.contentContainer}>
      <div className={classes.timeFrameContainer}>
        <div className={classes.timeFrame}>
          Top {results === "tracks" ? "Tracks" : "Artists"}{" "}
          {time === "short_term"
            ? "This Month"
            : time === "medium_term"
            ? " of the Past Six Months"
            : "of All Time"}
        </div>
        {results === "tracks" ? <div className={classes.playlistIconContainer} onClick={() => props.togglePopUp()}><Playlist size={30} color="#121212"  /></div> : null}
      </div>
    </div>
  );
};

export default TimeSliderDesktop;
