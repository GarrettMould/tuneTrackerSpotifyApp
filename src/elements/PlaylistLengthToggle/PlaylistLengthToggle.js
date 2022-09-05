
import classes from "./PlaylistLengthToggle.module.css";

const PlaylistLengthToggle = (props) => {


  return (
    <>
      <button className={props.resultsLength === 20 ? classes.btnActive : classes.btn } id="tbg-btn-1">20 Tracks</button>
        
  
      <button className={props.resultsLength === 50 ? classes.btnActive : classes.btn} id="tbg-btn-2">
      50 Tracks</button>
      </>
   
  );
}

export default PlaylistLengthToggle;