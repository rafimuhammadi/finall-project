import { Router } from "react-router-dom";
import classes from "../../components/layout/Header.module.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <Navigation />
      </nav>
    </header>
  );
};
export default Header;
