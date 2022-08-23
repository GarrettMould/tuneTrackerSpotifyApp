import { MusicNotesSimple } from "phosphor-react";
import classes from "./NoResultsAlertMobile.module.css";

const NoResultsAlertMobile = (props) => {
  return (
    <div className={classes.padding}>
      <div className={classes.contentContainer}>
        <div className={classes.iconContainer}>
          <MusicNotesSimple size={40} />
        </div>
        <div className={classes.message}>
          <div>
            There aren't enough results to calculate your listening history. Try
            another time range or listen to some more music and try again later!
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoResultsAlertMobile;
