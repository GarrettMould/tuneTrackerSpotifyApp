import classes from "./PlaylistPopUpDesktop.module.css";

const PlaylistPopUpDesktop = (props) => {
    return (
        <div className={classes.popUpContainer}>
            <div className={classes.contentContainer}>
                <div className={classes.messageContainer}>
                    <div className={classes.message}>Are you sure you want to create a Spotify playlist?</div>
                </div>
                <div className={classes.buttonsContainer}>
                    <button className={classes.btn} onClick={props.handlePlaylistCreate}>Create</button>
                    <button className={classes.btn} onClick={props.togglePopUp}>Cancel</button>
                </div>
            </div>
        </div>
    )
  };
  
  export default PlaylistPopUpDesktop;
  