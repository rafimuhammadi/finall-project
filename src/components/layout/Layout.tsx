import "../../assets/css/Layout.css";
const Layout = (props: any) => {
  return (
    <>
      <main className={"Content"}>{props.children}</main>
    </>
  );
};
export default Layout;
