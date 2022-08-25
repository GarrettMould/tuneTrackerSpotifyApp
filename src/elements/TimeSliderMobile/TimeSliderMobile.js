import classes from "./TimeSliderMobile.module.css";
import { Playlist } from "phosphor-react";
/*Eventually the title will be something like this Top {searchType} this {timePeriod} and the values will be taken from the value of the buttons (filter options) chosen by the user */

const TimeSliderMobile = (props) => {
  var results = props.resultsType;
  var time = props.timeFrame;
  return (
    <div className={classes.contentContainer}>
      <div className={classes.timeFrameContainer}>
        <div className={classes.timeFrameBigContainer}>
          <div className={classes.timeFrame}>
            Top {results === "tracks" ? "Tracks" : "Artists"}{" "}
          </div>
          {results === "tracks" ? <div className={classes.playlistIconContainer} onClick={() => props.handlePlaylistCreate(props.token)}><Playlist size={27.5} color="#121212"  /></div> : null}
        </div>
        
        <div className={classes.timeFrameSmall}>
          {time === "short_term"
            ? "This Month"
            : time === "medium_term"
            ? "Past Six Months"
            : "All Time"}
        </div>
      </div>
    </div>
  );
};

export default TimeSliderMobile;
