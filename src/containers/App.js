import HeaderDesktop from "../components/HeaderDesktop/HeaderDesktop";
import MainPageDesktop from "../components/MainPageDesktop/MainPageDesktop";
import PlaylistPopUp from "../components/PlaylistPopUp/PlaylistPopUp";
import HeaderMobile from "../components/HeaderMobile/HeaderMobile";
import MainPageMobile from "../components/MainPageMobile/MainPageMobile";

import 'swiper/css';
import Media from "react-media";
import { format, add } from "date-fns";
import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";
import PlaylistPopUpDesktop from "../components/PlaylistPopUpDesktop/PlaylistPopUpDesktop";

const App = (props) => {
  //SPOTIFY VARIABLES
  const CLIENT_ID = "c2c550a96c8c4dc0a5836d3f479cc850";
  const REDIRECT_URI = "https://tunetracker.netlify.app/";
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SPACE_DELIMITER = "%20";
  const SCOPES = [
    "user-top-read",
    "user-read-private",
    "user-read-email",
    "playlist-modify-public",
    "playlist-modify-private",
  ];
  const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

  const [dataTheme, setDataTheme] = useState("dark");
  // Tracks or Artists
  const [resultsType, setResultsType] = useState("");
  //Last Month, Six Months, All Time
  const [timeFrame, setTimeFrame] = useState("");
  const [token, setToken] = useState("");
  const [userTopList, setUserTopList] = useState([]);
  // Length of array (20 or 50)
  const [resultsLength, setResultsLength] = useState(20);
  // User ID
  const [userID, setUserID] = useState("");
  // ID of the created playlist 
  const [playlistID, setPlaylistID] = useState("");
  // Array of the tracks URIs in the displayed list (used to create playlist)
  const [trackURIs, setTrackURIs] = useState([]);
// Created Playlist Name
  const [playlistName, setPlaylistName] = useState("");
  // Created Playlist Display Name
  const [playlistDisplayName, setPlaylistDisplayName] = useState("");
  // Created Playlist Time Frame
  const [playlistTimeFrame, setPlaylistTimeFrame] = useState("");
  // Did the user click the "create playlist" button
  const [playlistPopUp, setPlaylistPopUp] = useState(false);
 
  
// Toggle ResultsLength onSlideChange, if resultsLength is 20, set it to 50 and vice versa
const toggleResultsLength = () => { 
  if (resultsLength === 20) { 
    searchArtistsExpand(resultsType, timeFrame)
    setResultsLength(50);
  } else if (resultsLength === 50) { 
    searchArtists(resultsType, timeFrame)
    setResultsLength(20);

  }
}
  

  console.log(trackURIs);

  // Funcion to get the User's ID and set the UserID variable (will be called using useEffect hook when the token changes)
  const getUserID = async () => {
    const { data } = await axios.get(`https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(data);

    setUserID(data.id);
  };


// Adds songs to playlist when a new playlist has been created
  useEffect(()=>{
    addSongsToPlaylist(trackURIs);
    clearPlaylistData();
  },[playlistID])

  // Calls the getUserID function when the token changes (new user)
  useEffect(() => {
    getUserID();
  }, [token]);

  // Disable scroll when pop up is open
  useEffect(() => {
    if (playlistPopUp) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [playlistPopUp]);

  // Fetches the token from the spotify url
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
    console.log(token);
  });

// Handle toggle of playlist length
  const togglePlaylistLength = (val) => setResultsLength(val);

  // Function to update the color theme
  const updateTheme = () => {
    dataTheme === "light" ? setDataTheme("dark") : setDataTheme("light");
  };
  // Function to clear token and clear results display
  const logout = () => {
    setToken("");
    setResultsType("");
    setTimeFrame("");

    window.localStorage.removeItem("token");
  };

  // Function to create a new playlist

  const addSongsToPlaylist = async (songs) => {
    ;
    return await axios({
      method: "post",
      url: `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        uris: songs,
      },
    });

    
  };

  const togglePopUp = () => { 
    {playlistPopUp === true ? setPlaylistPopUp(false) : setPlaylistPopUp(true)}

    var date = format(new Date(), "MMM do");
    setResultsLength(20); //MAKE 20 TRACKS THE STARTING POINT FOR THE PLAYLIST POP UP
    searchArtists(resultsType, timeFrame); //THIS RESETS SEARCH RESULTS TO 20 TRACKS ON POP UP OPEN OR CLOSE
    console.log(date);
    var playlistTimeFrameLocal;
    var playlistName;
    var playlistDisplayName;
    console.log(trackURIs);



    timeFrame === "short_term"
      ? (playlistTimeFrameLocal = "This Month")
      : timeFrame === "medium_term"
      ? (playlistTimeFrameLocal = "the Past Six Months")
      : (playlistTimeFrameLocal = "All Time");



    playlistName = `Top Tracks of ${playlistTimeFrameLocal} (${date})`;
    playlistDisplayName = `Top Tracks of ${playlistTimeFrameLocal}`;
    setPlaylistTimeFrame(playlistTimeFrameLocal);
    setPlaylistName(playlistName);
    setPlaylistDisplayName(playlistDisplayName);
  }


  const createPlaylistL = async () => {

    const { data } = await axios({
      method: 'post',
      url: `https://api.spotify.com/v1/users/${userID}/playlists`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: { 
        name: `${playlistName}`,
          description: "",
          public: false,
          collaborative: false,
      }
    }
    );
    
     //Basically, the playlist fills with songs on the second click, because on the first click, the state hasn't been updated yet
    
    setPlaylistID(data.id);
    console.log(data);


  };

  const clearPlaylistData = () => { 
    setPlaylistID(""); 
    setPlaylistPopUp(false);
    console.log("cleared playlist data");
  }

  const handlePlaylistCreate = () => { 
    console.log("create playlist selected")
    createPlaylistL().then(addSongsToPlaylist(trackURIs)).then(clearPlaylistData);
  }

  // Function to retreive search results and display them
  const searchArtists = async (results, time) => {
    var type = results;
    var time_range = time;
    const { data } = await axios.get(
      `https://api.spotify.com/v1/me/top/${type}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 20,
          time_range: `${time_range}`,
        },
      }
    );

    setResultsType(results);
    setTimeFrame(time);
    setUserTopList(data.items);
    setResultsLength(data.limit);
    console.log(data);
    console.log(resultsLength);
    console.log(userTopList);

    var uris = data.items.map((a) => a.uri);

    setTrackURIs(uris);
  };

  // Function to retreive expanded search results and display them
  const searchArtistsExpand = async (results, time) => {
    var type = results;
    var time_range = time;
    const { data } = await axios.get(
      `https://api.spotify.com/v1/me/top/${type}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 50,
          time_range: `${time_range}`,
        },
      }
    );

    setResultsType(results);
    setTimeFrame(time);
    setUserTopList(data.items);
    setResultsLength(data.limit);

    console.log(data);

    var uris = data.items.map((a) => a.uri);

    setTrackURIs(uris);
  };

  var resultsGiven = userTopList;

  return (
    <div className={classes.wrapper}>
    <div data-theme={dataTheme}>
      {playlistPopUp === true && userTopList.length ? <PlaylistPopUp playlistDisplayName={playlistDisplayName} toggleResultsLength={toggleResultsLength} searchArtists={searchArtists} searchArtistsExpand={searchArtistsExpand} resultsLength={resultsLength} resultsType={resultsType} resultsGiven={resultsGiven} timeFrame={timeFrame} playlistName={playlistName} createPlaylistL={createPlaylistL} handlePlaylistCreate={handlePlaylistCreate} togglePopUp={togglePopUp}></PlaylistPopUp> : null}
      <div className={playlistPopUp === true ? classes.opacity : null}>
      <Media queries={{ small: { maxWidth: 599 } }}>
        {(matches) =>
          matches.small ? (
            <>
              <HeaderMobile
                updateTheme={updateTheme}
                dataTheme={dataTheme}
                logout={logout}
                token={token}
              ></HeaderMobile>
              <MainPageMobile
                togglePopUp={togglePopUp}
                handlePlaylistCreate={handlePlaylistCreate}
                dataTheme={dataTheme}
                CLIENT_ID={CLIENT_ID}
                REDIRECT_URI={REDIRECT_URI}
                AUTH_ENDPOINT={AUTH_ENDPOINT}
                RESPONSE_TYPE={RESPONSE_TYPE}
                SPACE_DELIMITER={SPACE_DELIMITER}
                SCOPES={SCOPES}
                SCOPES_URL_PARAM={SCOPES_URL_PARAM}
                resultsType={resultsType}
                token={token}
                userTopList={userTopList}
                resultsGiven={resultsGiven}
                timeFrame={timeFrame}
                resultsLength={resultsLength}
                searchArtists={searchArtists}
                searchArtistsExpand={searchArtistsExpand}
              ></MainPageMobile>
            </>
          ) : (
            <>
              <HeaderDesktop
                updateTheme={updateTheme}
                dataTheme={dataTheme}
                logout={logout}
                token={token}
              ></HeaderDesktop>
              <MainPageDesktop
                togglePopUp={togglePopUp}
                handlePlaylistCreate={handlePlaylistCreate}
                createPlaylistL={createPlaylistL}
                dataTheme={dataTheme}
                CLIENT_ID={CLIENT_ID}
                REDIRECT_URI={REDIRECT_URI}
                AUTH_ENDPOINT={AUTH_ENDPOINT}
                RESPONSE_TYPE={RESPONSE_TYPE}
                SPACE_DELIMITER={SPACE_DELIMITER}
                SCOPES={SCOPES}
                SCOPES_URL_PARAM={SCOPES_URL_PARAM}
                resultsType={resultsType}
                token={token}
                resultsGiven={resultsGiven}
                timeFrame={timeFrame}
                resultsLength={resultsLength}
                userTopList={userTopList}
                searchArtists={searchArtists}
                searchArtistsExpand={searchArtistsExpand}
              ></MainPageDesktop>
            </>
          )
        }
      </Media>
        </div>
      </div>
    </div>
  );
};

export default App;
