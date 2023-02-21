import NavigationItems from "./NavigationItems";
import classes from "../../assets/css/NavigationItem.module.css";
const Navigation = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItems link="/todoList">Todo Items</NavigationItems>
      <NavigationItems link="/">Home Page</NavigationItems>
    </ul>
  );
};
export default Navigation;
