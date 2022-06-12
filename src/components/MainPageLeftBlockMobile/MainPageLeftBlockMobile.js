import TimeSliderMobile from "../../elements/TimeSliderMobile/TimeSliderMobile";
import FiltersBarMobile from "../../elements/FiltersBarMobile/FiltersBarMobile";
import ResultsBoxMobile from "../../elements/ResultsBoxMobile/ResultsBoxMobile";
import classes from "./MainPageLeftBlockMobile.module.css";

const MainPageLeftBlockMobile = (props) => {
  var hasUserSearched = props.resultsType;
  return (
    <div className={classes.background}>
      {hasUserSearched ? (
        <>
          <TimeSliderMobile
            resultsType={props.resultsType}
            timeFrame={props.timeFrame}
          ></TimeSliderMobile>
          <FiltersBarMobile
            searchArtists={props.searchArtists}
          ></FiltersBarMobile>
        </>
      ) : (
        <FiltersBarMobile
          searchArtists={props.searchArtists}
        ></FiltersBarMobile>
      )}

      <ResultsBoxMobile
        resultsType={props.resultsType}
        timeFrame={props.timeFrame}
        token={props.token}
        resultsGiven={props.resultsGiven}
        resultsLength={props.resultsLength}
        searchArtists={props.searchArtists}
        searchArtistsExpand={props.searchArtistsExpand}
      ></ResultsBoxMobile>
    </div>
  );
};

export default MainPageLeftBlockMobile;
