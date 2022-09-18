import classes from "./PlaylistPopUpDesktop.module.css";

import PlaylistLengthToggle from "../../elements/PlaylistLengthToggle/PlaylistLengthToggle";

import { X } from "phosphor-react";

import { Card, Container, Col, Row } from "react-bootstrap";

const PlaylistPopUpDesktop = (props) => {
    var results;
    {
        props.resultsType == "tracks"
          ? (results = props.resultsGiven.map((result, i) => {
              var number = i + 1;
              return (
                <Row>
                    <Col xs="3" className={classes.column}>
                        <div className={classes.imageContainer}>
                        <img
                            src={result.album.images[0].url}
                            className={classes.image}
                        ></img>
                        </div>
                    </Col>
                    <Col xs="8">
                    <div className={classes.nameContainer}>
                      <div className={classes.name}>
                        <span className={classes.number}>{`${number}.`}</span>{" "}
                        {result.name}
                      </div>
                      <div className={classes.secondaryName}>
                        {" "}
                        {result.artists[0].name}{" "}
                      </div>
                    </div>
                    </Col>
                </Row>
                
              );
            }))
          : <div></div>
      }
    return (
        <div className={classes.popUpContainer}>
            <div className={classes.relativeWrapper}>
            <div className={classes.buttonsContainer}>
                    <button className={classes.btn} onClick={props.createPlaylistL}>Create</button>
                </div>
            <div className={classes.contentContainer}>
                <div className={classes.playlistInfoWrapper}>
                    <div className={classes.rowOne}>
                        <div className={classes.popUpTitle}>Create Spotify Playlist</div>
                        <button className={classes.btnCancel}><X size={25} color="white" onClick={props.togglePopUp}/></button>
                        
                    </div>
                    <div className={classes.rowTwo}>
                    <div className={classes.messageContainer}>
                    <div className={classes.message}>{props.playlistDisplayName}</div>
                </div>
                    </div>
                    <div className={classes.rowThree}>
                      <PlaylistLengthToggle resultsType={props.resultsType} timeFrame={props.timeFrame} searchArtists={props.searchArtists} searchArtistsExpand={props.searchArtistsExpand} resultsLength={props.resultsLength} togglePlaylistLength={props.togglePlaylistLength}></PlaylistLengthToggle>
    </div>
                </div>
                <div className={classes.resultsContainer}>{results}</div>
            </div>
            </div>
        </div>
    )
  };
  
  export default PlaylistPopUpDesktop;
  