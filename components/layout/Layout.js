import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <div className={classes.main}>{props.children}</div>
    </div>
  );
};

export default Layout;
