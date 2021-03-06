import Image from 'next/image';
import { useRouter } from 'next/router';

import classes from './MeetupItem.module.css';

const MeetupItem = props => {
  const router = useRouter();

  const showDetailHandler = () => {
    router.push(`/${props.id}`);
  };
  // props.img
  return (
    <div className={classes.meetup}>
      <div className={classes.image}>
        <Image src="/meetup-2" alt={props.title} width="1200" height="630" />
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
