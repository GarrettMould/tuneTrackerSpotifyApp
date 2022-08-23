import MainPageLeftBlockMobile from "../MainPageLeftBlockMobile/MainPageLeftBlockMobile";
import LoginPageMobile from "../LoginPageMobile/LoginPageMobile";

const MainPageMobile = (props) => {
  var loggedIn = props.token;

  return (
    <>
      {loggedIn ? (
        <>
          <MainPageLeftBlockMobile
            token={props.token}
            resultsGiven={props.resultsGiven}
            resultsType={props.resultsType}
            timeFrame={props.timeFrame}
            userTopList={props.userTopList}
            resultsLength={props.resultsLength}
            searchArtists={props.searchArtists}
            searchArtistsExpand={props.searchArtistsExpand}
          ></MainPageLeftBlockMobile>
        </>
      ) : (
        <LoginPageMobile
          CLIENT_ID={props.CLIENT_ID}
          REDIRECT_URI={props.REDIRECT_URI}
          AUTH_ENDPOINT={props.AUTH_ENDPOINT}
          RESPONSE_TYPE={props.RESPONSE_TYPE}
          SPACE_DELIMITER={props.SPACE_DELIMITER}
          SCOPES={props.SCOPES}
          SCOPES_URL_PARAM={props.SCOPES_URL_PARAM}
        ></LoginPageMobile>
      )}
    </>
  );
};

export default MainPageMobile;
