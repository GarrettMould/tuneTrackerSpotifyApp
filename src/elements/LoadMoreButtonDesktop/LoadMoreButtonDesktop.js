import { Button } from "react-bootstrap";
import classes from "./LoadMoreButtonDesktop.module.css";
const LoadMoreButtonDesktop = (props) => {
  const handleClick = () => {

    {props.resultsLength === 20 ?  props.searchArtistsExpand(props.resultsType, props.timeFrame) :  props.searchArtists(props.resultsType, props.timeFrame) }
   
  };

  return (
    <div className={classes.padding}>
      <Button className={classes.btn} onClick={handleClick}>
        {props.resultsLength === 20 ? "Load More" : "Show Less"}
      </Button>
    </div>
  );
};

export default LoadMoreButtonDesktop;
