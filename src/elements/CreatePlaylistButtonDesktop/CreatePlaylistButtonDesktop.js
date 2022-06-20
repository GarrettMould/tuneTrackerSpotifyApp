import { Button } from "react-bootstrap";
import classes from "./CreatePlaylistButtonDesktop.module.css";

const CreatePlaylistButtonDesktop = (props) => {
  return (
    <div className={classes.padding}>
      <Button className={classes.btn} onClick={props.createPlaylist}>
        Create Spotify Playlist
      </Button>
    </div>
  );
};

export default CreatePlaylistButtonDesktop;
