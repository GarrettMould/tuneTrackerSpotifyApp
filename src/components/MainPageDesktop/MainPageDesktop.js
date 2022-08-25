import LoginPageDesktop from "../LoginPageDesktop/LoginPageDesktop";
import MainPageLeftBlockDesktop from "../MainPageLeftBlockDesktop/MainPageLeftBlockDesktop";
import MainPageRightBlockDesktop from "../MainPageRightBlockDesktop/MainPageRightBlockDesktop";
import classes from "./MainPageDesktop.module.css";

const MainPageDesktop = (props) => {
  var loggedIn = props.token;

  return (
    <>
      {loggedIn ? (
        <>
          <MainPageLeftBlockDesktop
            togglePopUp={props.togglePopUp}
            handlePlaylistCreate={props.handlePlaylistCreate}
            token={props.token}
            createPlaylistL={props.createPlaylistL}
            resultsGiven={props.resultsGiven}
            resultsType={props.resultsType}
            userTopList={props.userTopList}
            resultsLength={props.resultsLength}
            timeFrame={props.timeFrame}
            searchArtists={props.searchArtists}
            searchArtistsExpand={props.searchArtistsExpand}
          ></MainPageLeftBlockDesktop>
        </>
      ) : (
        <LoginPageDesktop
          CLIENT_ID={props.CLIENT_ID}
          REDIRECT_URI={props.REDIRECT_URI}
          AUTH_ENDPOINT={props.AUTH_ENDPOINT}
          RESPONSE_TYPE={props.RESPONSE_TYPE}
          SPACE_DELIMITER={props.SPACE_DELIMITER}
          SCOPES={props.SCOPES}
          SCOPES_URL_PARAM={props.SCOPES_URL_PARAM}
        ></LoginPageDesktop>
      )}
    </>
  );
};

export default MainPageDesktop;
