import { Navbar, Button } from "react-bootstrap";
import { List } from "phosphor-react";
import classes from "./HeaderMobile.module.css";

const HeaderMobile = (props) => {
  const loggedIn = props.token;
  return (
    <Navbar className={classes.navbarHeader}>
      <div className={classes.navContentContainer}>
        <div className={classes.siteTitle}>
          <span className={classes.greenText}>Tune</span> Tracker
        </div>
        <div className={classes.navListContainer}>
          <List size={30} weight="bold"></List>
        </div>
      </div>
    </Navbar>
  );
};

export default HeaderMobile;
