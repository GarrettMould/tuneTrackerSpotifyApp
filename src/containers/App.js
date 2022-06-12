import HeaderDesktop from "../components/HeaderDesktop/HeaderDesktop";
import MainPageDesktop from "../components/MainPageDesktop/MainPageDesktop";

import HeaderMobile from "../components/HeaderMobile/HeaderMobile";
import MainPageMobile from "../components/MainPageMobile/MainPageMobile";

import Media from "react-media";
import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";

const App = (props) => {
  //SPOTIFY VARIABLES

  const CLIENT_ID = "c2c550a96c8c4dc0a5836d3f479cc850";
  const REDIRECT_URI = "https://tunetracker.netlify.app/";
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SPACE_DELIMITER = "%20";
  const SCOPES = ["user-top-read", "user-read-private"];
  const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

  const [dataTheme, setDataTheme] = useState("dark");
  const [resultsType, setResultsType] = useState("");
  const [timeFrame, setTimeFrame] = useState("");
  const [token, setToken] = useState("");
  const [userTopList, setUserTopList] = useState([]);
  const [resultsLength, setResultsLength] = useState(20);

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
  });

  const updateTheme = () => {
    dataTheme == "light" ? setDataTheme("dark") : setDataTheme("light");
  };
  // Function to clear token and clear results display
  const logout = () => {
    setToken("");
    setResultsType("");
    setTimeFrame("");

    window.localStorage.removeItem("token");
  };

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
  };

  var resultsGiven = userTopList;

  return (
    <div data-theme={dataTheme}>
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
                searchArtists={searchArtists}
                searchArtistsExpand={searchArtistsExpand}
              ></MainPageDesktop>
            </>
          )
        }
      </Media>
    </div>
  );
};

export default App;
