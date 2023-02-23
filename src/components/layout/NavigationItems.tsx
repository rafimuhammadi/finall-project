import { Link } from "react-router-dom";
import classes from "../../assets/css/NavigationItem.module.css";

const NavigationItems = (props: any) => {
  return (
    <li className={classes.NavigationItem}>
      <Link to={props.link} className={props.className}>
        {props.title}
      </Link>
    </li>
  );
};
export default NavigationItems;
