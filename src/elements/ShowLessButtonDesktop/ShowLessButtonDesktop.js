import { Button } from "react-bootstrap";
import classes from "./ShowLessButtonDesktop.module.css";
const ShowLessButtonDesktop = (props) => {
  const handleClick = () => {
    props.searchArtists(props.resultsType, props.timeFrame);
  };

  return (
    <div className={classes.padding}>
      <Button className={classes.btn} onClick={handleClick}>
        Show Less
      </Button>
    </div>
  );
};

export default ShowLessButtonDesktop;
