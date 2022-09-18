// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { useState } from "react";

import classes from "./PlaylistPopUpMobile.module.css";

import { X } from "phosphor-react";

import { Card, Container, Col, Row } from "react-bootstrap";

import PlaylistLengthToggle from "../../../elements/PlaylistLengthToggle/PlaylistLengthToggle";

const PlaylistPopUpMobile = (props) => {



  const [scrollLock, setScrollLock] = useState(false)


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
              
                <div className={classes.playlistInfoWrapper}>
                    <div className={classes.rowOne}>
                        <div className={classes.popUpTitle}>Create Spotify Playlist</div>
                        <button className={classes.btnCancel}><X size={25} color="white" onClick={props.togglePopUp}/></button>
                        
                        
                    </div>
                    <div className={classes.rowTwo}>
                    <div className={classes.messageContainer}>
                      <div className={classes.message}>{props.playlistName}</div>
                    </div>
                    </div>
                    <div className={classes.rowThree}>
                      <PlaylistLengthToggle resultsType={props.resultsType} timeFrame={props.timeFrame} searchArtists={props.searchArtists} searchArtistsExpand={props.searchArtistsExpand} resultsLength={props.resultsLength} togglePlaylistLength={props.togglePlaylistLength}></PlaylistLengthToggle>
    </div>
                </div>
                <Swiper 
                  //initialSlide={props.resultsLength === 20 ? "0" : "1"} // TAKE THIS OUT IF YOU ARE GOING TO SET THE DEFAULT PLAYLIST LENGTH TO 20
                  spaceBetween={50}
                  slidesPerView={1}
                  onSliderMove={() => setScrollLock(true)}
                  onRealIndexChange={() => props.toggleResultsLength()}
                  onTouchEnd={() => setScrollLock(false)}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide><div className={classes.slideContainer}><div className={scrollLock ? classes.resultsContainerNoScroll : classes.resultsContainer}>{results}</div></div></SwiperSlide>
                  <SwiperSlide><div className={classes.slideContainer}><div className={scrollLock ? classes.resultsContainerNoScroll : classes.resultsContainer}>{results}</div></div></SwiperSlide>
                </Swiper>
                <div className={classes.buttonsContainer}>
                    <button className={classes.btn} onClick={props.createPlaylistL}>Create</button>
                </div>
                
            </div>
        </div>
    )
  };
  
  export default PlaylistPopUpMobile;
  