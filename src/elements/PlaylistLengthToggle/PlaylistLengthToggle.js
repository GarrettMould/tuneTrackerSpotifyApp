
import classes from "./PlaylistLengthToggle.module.css";

const PlaylistLengthToggle = (props) => {

  const handleClick = (e) => {

    if (e.currentTarget.id === "btn-short") { 
      props.searchArtists(props.resultsType, props.timeFrame)
    } else if (e.currentTarget.id === "btn-long") { 
      props.searchArtistsExpand(props.resultsType, props.timeFrame)
    } else { 
      console.log(e.currentTarget.id)
    }
    
  };


  return (
    <div className={classes.toggleContainer}>
    <div className={props.resultsLength === 20 ? classes.toggleActive : classes.toggleInactive } id="btn-short" onClick={handleClick}><div className={classes.trackText}>20 Tracks</div></div>
        
  
        <div className={props.resultsLength === 50 ? classes.toggleActive : classes.toggleInactive} id="btn-long" onClick={handleClick}>
        <div className={classes.trackText}>50 Tracks</div></div>
    </div>
      
   
  );
}

export default PlaylistLengthToggle;