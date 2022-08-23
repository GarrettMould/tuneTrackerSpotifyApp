import { Button } from "react-bootstrap";
import classes from "./LoadMoreButtonDesktop.module.css";
const LoadMoreButtonDesktop = (props) => {
  const handleClick = () => {
    props.searchArtistsExpand(props.resultsType, props.timeFrame);
  };

  return (
    <div className={classes.padding}>
      <Button className={classes.btn} onClick={handleClick}>
        Load More
      </Button>
    </div>
  );
};

export default LoadMoreButtonDesktop;
