import { Card } from "react-bootstrap";
import classes from "./ResultsBoxMobile.module.css";

const ResultsBoxMobile = (props) => {
  var results;
  var loggedIn = props.token;
  {
    props.resultsType == "tracks"
      ? (results = props.resultsGiven.map((result, i) => {
          return (
            <Card className={classes.card} key={result.id}>
              <div className={classes.contentContainer}>
                <div className={classes.imageContainer}>
                  <img
                    src={result.album.images[0].url}
                    className={classes.image}
                  ></img>
                </div>
                <div className={classes.nameContainer}>
                  <div className={classes.name}>{result.name}</div>
                  <div className={classes.secondaryName}>
                    {" "}
                    {result.artists[0].name}{" "}
                  </div>
                </div>
              </div>
            </Card>
          );
        }))
      : (results = props.resultsGiven.map((result, i) => {
          return (
            <Card className={classes.card} key={result.id}>
              <div className={classes.contentContainer}>
                <div className={classes.imageContainer}>
                  <img
                    src={result.images[0].url}
                    className={classes.image}
                  ></img>
                </div>
                <div className={classes.nameContainer}>
                  <div className={classes.name}>{result.name}</div>
                </div>
              </div>
            </Card>
          );
        }));
  }

  return <div className={classes.background}>{results}</div>;
};

export default ResultsBoxMobile;
