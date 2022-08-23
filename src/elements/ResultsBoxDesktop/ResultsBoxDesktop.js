import CreatePlaylistButtonDesktop from "../CreatePlaylistButtonDesktop/CreatePlaylistButtonDesktop";
import LoadMoreButtonDesktop from "../LoadMoreButtonDesktop/LoadMoreButtonDesktop";
import { Card, Container, Col, Row } from "react-bootstrap";
import classes from "./ResultsBoxDesktop.module.css";
import NoResultsAlertDesktop from "../NoResultsAlertDesktop/NoResultsAlertDesktop";

const ResultsBoxDesktop = (props) => {
  var results;
  var userTopList = props.userTopList;
  var resultsLength = props.resultsLength;
  var button;




  {
    props.resultsType == "tracks"
      ? (results = props.resultsGiven.map((result, i) => {
          var number = i + 1;
          return (
            <Col xs="3" className={classes.column}>
              <div className={classes.contentContainer}>
                <div className={classes.imageContainer}>
                  <img
                    src={result.album.images[0].url}
                    className={classes.image}
                  ></img>
                </div>
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
              </div>
            </Col>
          );
        }))
      : (results = props.resultsGiven.map((result, i) => {
          var number = i + 1;
          return (
            <Col xs="3" className={classes.column}>
              <div className={classes.contentContainer}>
                <div className={classes.imageContainer}>
                  <img
                    src={result.images[0].url}
                    className={classes.image}
                  ></img>
                </div>
                <div className={classes.nameContainer}>
                  <div className={classes.name}>
                    <span className={classes.number}>{`${number}.`}</span>{" "}
                    {result.name}
                  </div>
                </div>
              </div>
            </Col>
          );
        }));
  }

  return (
    <div className={classes.background}>
      <Container>
        {!userTopList.length ? (
          <NoResultsAlertDesktop></NoResultsAlertDesktop>
        ) : (
          <>
            <Row className={classes.row}>{results}</Row>
            <LoadMoreButtonDesktop 
            resultsLength={props.resultsLength} 
            resultsType={props.resultsType}
            timeFrame={props.timeFrame}
            searchArtistsExpand={props.searchArtistsExpand}
            searchArtists={props.searchArtists}>

            </LoadMoreButtonDesktop>
          </>
        )}
      </Container>
    </div>
  );
};

export default ResultsBoxDesktop;
