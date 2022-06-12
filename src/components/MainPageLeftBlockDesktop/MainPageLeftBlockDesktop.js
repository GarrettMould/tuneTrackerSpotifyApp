import TimeSliderDesktop from "../../elements/TimeSliderDesktop/TimeSliderDesktop";
import FiltersBarDesktop from "../../elements/FiltersBarDesktop/FiltersBarDesktop";
import ResultsBoxDesktop from "../../elements/ResultsBoxDesktop/ResultsBoxDesktop";
import classes from "./MainPageLeftBlockDesktop.module.css";

const MainPageLeftBlockDesktop = (props) => {
  var hasUserSearched = props.resultsType;
  return (
    <div className={classes.background}>
      {hasUserSearched ? (
        <>
          <TimeSliderDesktop
            resultsType={props.resultsType}
            timeFrame={props.timeFrame}
          ></TimeSliderDesktop>
          <FiltersBarDesktop
            searchArtists={props.searchArtists}
          ></FiltersBarDesktop>
        </>
      ) : (
        <FiltersBarDesktop
          searchArtists={props.searchArtists}
        ></FiltersBarDesktop>
      )}

      <ResultsBoxDesktop
        resultsType={props.resultsType}
        timeFrame={props.timeFrame}
        resultsLength={props.resultsLength}
        token={props.token}
        resultsGiven={props.resultsGiven}
        searchArtists={props.searchArtists}
        searchArtistsExpand={props.searchArtistsExpand}
      ></ResultsBoxDesktop>
    </div>
  );
};

export default MainPageLeftBlockDesktop;
