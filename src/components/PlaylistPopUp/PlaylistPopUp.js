import Media from "react-media";

import PlaylistPopUpDesktop from "../PlaylistPopUpDesktop/PlaylistPopUpDesktop";
import PlaylistPopUpMobile from "../PlaylistPopUpMobile/PlaylistPopUpDesktop/PlaylistPopUpMobile";

const PlaylistPopUp = (props) => { 
    return (
        <Media queries={{ small: { maxWidth: 599 } }}>
        {matches =>
          matches.small ? (
            <PlaylistPopUpMobile resultsLength={props.resultsLength} resultsType={props.resultsType} resultsGiven={props.resultsGiven} playlistTimeFrame={props.playlistTimeFrame} playlistName={props.playlistName} createPlaylistL={props.createPlaylistL} handlePlaylistCreate={props.handlePlaylistCreate} togglePopUp={props.togglePopUp}></PlaylistPopUpMobile>
          ) : (
            <PlaylistPopUpDesktop resultsLength={props.resultsLength} resultsType={props.resultsType} resultsGiven={props.resultsGiven} playlistTimeFrame={props.playlistTimeFrame} playlistName={props.playlistName} createPlaylistL={props.createPlaylistL} handlePlaylistCreate={props.handlePlaylistCreate} togglePopUp={props.togglePopUp}></PlaylistPopUpDesktop>
          )
        }
      </Media>
    )

}; 

export default PlaylistPopUp;