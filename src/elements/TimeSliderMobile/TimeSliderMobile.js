import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import classes from "./TimeSliderMobile.module.css";

const TimeSliderMobile = (props) => {
  return (
    <div className={classes.padding}>
      <div className={classes.contentContainer}>
        <div className={classes.arrowContainer}>
          <ArrowCircleLeft size={30}></ArrowCircleLeft>
        </div>
        <div className={classes.timeFrameContainer}>
          <div className={classes.timeFrame}>This Month</div>
        </div>
        <div className={classes.arrowContainer}>
          <ArrowCircleRight size={30}></ArrowCircleRight>
        </div>
      </div>
    </div>
  );
};

export default TimeSliderMobile;
