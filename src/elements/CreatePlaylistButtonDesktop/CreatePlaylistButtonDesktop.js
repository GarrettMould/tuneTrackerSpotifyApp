import { Button } from "react-bootstrap";
import classes from "./CreatePlaylistButtonDesktop.module.css";

const CreatePlaylistButtonDesktop = (props) => {

  var token = props.token; 

  return (
    <div className={classes.padding}>
      <Button className={classes.btn} onClick={ () => props.createPlaylistL(token)}>
        Create Spotify Playlist
      </Button>
    </div>
  );
};

export default CreatePlaylistButtonDesktop;
