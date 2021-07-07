import Link from "next/link";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <div className={classes.navigation}>
      <h1>React Meetups</h1>
      <ul>
        <li>
          <Link href="/">All Meetups</Link>
        </li>
        <li>
          <Link href="/new-meetup">Add New Meetup</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNavigation;
