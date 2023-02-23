import NavigationItems from "./NavigationItems";
import classes from "../../assets/css/NavigationItem.module.css";
import { useLocation } from "react-router-dom";
const Navigation = () => {
  const isActive = useLocation().pathname;
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItems
        link="/add-todo"
        title={"Add New Item"}
        className={` ${isActive == "/add-todo" ? classes.active : ""}`}
      />
      <NavigationItems
        link="/"
        title={"Home Page"}
        className={` ${isActive == "/" ? classes.active : ""}`}
      />
    </ul>
  );
};
export default Navigation;
