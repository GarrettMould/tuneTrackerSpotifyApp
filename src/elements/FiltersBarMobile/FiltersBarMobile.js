import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import classes from "./FiltersBarMobile.module.css";

const FiltersBarMobile = (props) => {
  const [results, setResults] = useState("tracks");
  const [time, setTime] = useState("long_term");
  const [activeResults, setActiveResults] = useState("tracks");
  const [activeTime, setActiveTime] = useState("long_term");

  useEffect(() => {
    handleSubmit();
  }, [results, time]);

  const handleSubmit = () => {
    props.searchArtists(results, time);
  };

  const updateResultsType = (e) => {
    setResults(e.currentTarget.value);
    setActiveResults(e.currentTarget.value);
  };
  const updateTime = (e) => {
    setTime(e.currentTarget.id);
    setActiveTime(e.currentTarget.id);
  };

  return (
    <div className={classes.padding}>
      <div className={classes.contentContainer}>
        <div className={classes.searchTypeContainer}>
          <div className={classes.searchTypeTracks}>
            <Button
              className={
                activeResults == "tracks" ? classes.btnActive : classes.btn
              }
              value={"tracks"}
              onClick={updateResultsType}
            >
              Tracks
            </Button>
          </div>
          <div className={classes.searchTypeTracks}>
            <Button
              className={
                activeResults == "artists" ? classes.btnActive : classes.btn
              }
              value={"artists"}
              onClick={updateResultsType}
            >
              Artists
            </Button>
          </div>
        </div>
        <div className={classes.block}></div>
        <div className={classes.timeFrameContainer}>
          <div className={classes.timeFrameShort}>
            <Button
              className={
                activeTime == "short_term" ? classes.btnActive : classes.btn
              }
              id="short_term"
              onClick={updateTime}
            >
              This Month
            </Button>
          </div>
          <div className={classes.timeFrameMedium}>
            <Button
              className={
                activeTime == "medium_term" ? classes.btnActive : classes.btn
              }
              id="medium_term"
              onClick={updateTime}
            >
              Past Six Months
            </Button>
          </div>
          <div className={classes.timeFrameLong}>
            <Button
              className={
                activeTime == "long_term" ? classes.btnActive : classes.btn
              }
              id="long_term"
              onClick={updateTime}
            >
              All Time
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersBarMobile;
