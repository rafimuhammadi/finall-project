import NavigationItems from "./NavigationItems";
import classes from "../../assets/css/NavigationItem.module.css";
const Navigation = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItems link="/todoList" title={"Add New Item"} />
      <NavigationItems link="/" title={"Home Page"} />
    </ul>
  );
};
export default Navigation;
