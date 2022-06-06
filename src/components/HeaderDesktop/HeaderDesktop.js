import { Navbar, Button } from "react-bootstrap";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import classes from "./HeaderDesktop.module.css";

const HeaderDesktop = (props) => {
  const loggedIn = props.token;
  return (
    <Navbar className={classes.navbarHeader}>
      <div className={classes.navContentContainer}>
        <div className={classes.siteTitle}>
          <span className={classes.greenText}>Tune</span> Tracker
        </div>
        <div className={classes.navListContainer}>
          {loggedIn ? (
            <ul className={classes.navList}>
              <div className={classes.itemContainer}>
                <a href="#">
                  <li className={classes.item}>How it Works</li>
                </a>
              </div>
              <div className={classes.itemContainer}>
                <a href="#">
                  <li className={classes.item}>Share</li>
                </a>
              </div>
              <div className={classes.itemContainer}>
                <Button className={classes.btn} onClick={props.logout}>
                  Logout
                </Button>
              </div>
            </ul>
          ) : (
            <ul className={classes.navListLoggedOut}>
              <div className={classes.itemContainerLoggedOut}>
                <a href="#">
                  <li className={classes.item}>How it Works</li>
                </a>
              </div>
              <div className={classes.itemContainerLoggedOut}>
                <a href="#">
                  <li className={classes.item}>Share</li>
                </a>
              </div>
            </ul>
          )}
        </div>
      </div>
    </Navbar>
  );
};

export default HeaderDesktop;
