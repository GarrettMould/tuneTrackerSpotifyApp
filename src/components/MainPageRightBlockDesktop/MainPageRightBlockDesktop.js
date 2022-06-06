import classes from "./MainPageRightBlockDesktop.module.css";
import AdjustFiltersDesktop from "../../elements/AdjustFiltersDesktop/AdjustFiltersDesktop";
const MainPageRightBlockDesktop = (props) => {
  return (
    <div className={classes.background}>
      <AdjustFiltersDesktop
        searchArtists={props.searchArtists}
      ></AdjustFiltersDesktop>
    </div>
  );
};

export default MainPageRightBlockDesktop;
