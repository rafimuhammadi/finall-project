import { Link, NavLink } from "react-router-dom";
import classes from "../../assets/css/NavigationItem.module.css";
const NavigationItems = (props: any) => {
  return (
    <li className={classes.NavigationItem}>
      {/* <NavLink to={props.link} className={classes.active}>
        {props.children}
      </NavLink>
      <Link to={props.link} className={""}>
        {props.children}
      </Link> */}
      <Link to="add-item" className={""}>
        Add New
      </Link>
    </li>
  );
};
export default NavigationItems;
