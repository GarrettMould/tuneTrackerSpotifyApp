import NoResultsAlertMobile from "../NoResultsAlertMobile/NoResultsAlertMobile";
import LoadMoreButtonMobile from "../LoadMoreButtonMobile/LoadMoreButtonMobile";
import ShowLessButtonMobile from "../ShowLessButtonMobile/ShowLessButtonMobile";

import { Card, Container, Row, Col } from "react-bootstrap";
import classes from "./ResultsBoxMobile.module.css";

const ResultsBoxMobile = (props) => {
  var results;
  var userTopList = props.userTopList;
  var resultsLength = props.resultsLength;
  var button;

  

  {
    props.resultsType == "tracks"
      ? (results = props.resultsGiven.map((result, i) => {
          var number = i + 1;
          return (
            <Col xs="4" className={classes.column}>
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
            <Col xs="4" className={classes.column}>
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
          <NoResultsAlertMobile></NoResultsAlertMobile>
        ) : (
          <>
            <Row className={classes.row}>{results}</Row>
            <LoadMoreButtonMobile 
            resultsLength={props.resultsLength} 
            resultsType={props.resultsType}
            timeFrame={props.timeFrame}
            searchArtistsExpand={props.searchArtistsExpand}
            searchArtists={props.searchArtists}></LoadMoreButtonMobile>
          </>
        )}
      </Container>
    </div>
  );
};

export default ResultsBoxMobile;
