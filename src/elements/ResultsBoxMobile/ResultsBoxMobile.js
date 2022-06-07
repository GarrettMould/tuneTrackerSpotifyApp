import { Card, Container, Row, Col } from "react-bootstrap";
import classes from "./ResultsBoxMobile.module.css";

const ResultsBoxMobile = (props) => {
  var results;
  var loggedIn = props.token;
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
        <Row className={classes.row}>{results}</Row>
      </Container>
    </div>
  );
};

export default ResultsBoxMobile;
