import Media from "react-media";

import PlaylistPopUpDesktop from "../PlaylistPopUpDesktop/PlaylistPopUpDesktop";
import PlaylistPopUpMobile from "../PlaylistPopUpMobile/PlaylistPopUpDesktop/PlaylistPopUpMobile";

const PlaylistPopUp = (props) => { 
    return (
        <Media queries={{ small: { maxWidth: 599 } }}>
        {matches =>
          matches.small ? (
            <PlaylistPopUpMobile toggleResultsLength={props.toggleResultsLength} timeFrame={props.timeFrame} searchArtists={props.searchArtists} searchArtistsExpand={props.searchArtistsExpand} resultsLength={props.resultsLength} resultsType={props.resultsType} resultsGiven={props.resultsGiven} playlistTimeFrame={props.playlistTimeFrame} playlistName={props.playlistName} createPlaylistL={props.createPlaylistL} handlePlaylistCreate={props.handlePlaylistCreate} togglePopUp={props.togglePopUp}></PlaylistPopUpMobile>
          ) : (
            <PlaylistPopUpDesktop  timeFrame={props.timeFrame} searchArtists={props.searchArtists} searchArtistsExpand={props.searchArtistsExpand} resultsLength={props.resultsLength} resultsType={props.resultsType} resultsGiven={props.resultsGiven} playlistTimeFrame={props.playlistTimeFrame} playlistName={props.playlistName} createPlaylistL={props.createPlaylistL} handlePlaylistCreate={props.handlePlaylistCreate} togglePopUp={props.togglePopUp}></PlaylistPopUpDesktop>
          )
        }
      </Media>
    )

}; 

export default PlaylistPopUp;