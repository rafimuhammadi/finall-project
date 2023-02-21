import { Outlet } from "react-router-dom";
import "../../assets/css/Layout.css";
import Header from "./Header";
const Layout = (props: any) => {
  return (
    <>
      <Header />
      <main className={"Content"}>{<Outlet />}</main>
    </>
  );
};
export default Layout;
