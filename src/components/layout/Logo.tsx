import logo from "../../assets/images/todo.png";
import classes from "../../assets/css/Logo.module.css";
const Logo = (props: any) => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={logo} alt="MyBurger" />
    </div>
  );
};
export default Logo;
