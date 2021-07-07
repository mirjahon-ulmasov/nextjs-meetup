import Image from "next/image";
import { useRouter } from "next/router";

import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const router = useRouter();

  const showDetailHandler = () => {
    router.push(`/${props.id}`);
  };

  return (
    <div className={classes.meetup}>
      <div className={classes.image}>
        <img src={props.img} alt={props.title} layout="fill" />
      </div>
      <div className={classes.info}>
        <h2>{props.title}</h2>
        <p>{props.address}</p>
        <button className="button" onClick={showDetailHandler}>
          Show Details
        </button>
      </div>
    </div>
  );
};

export default MeetupItem;
