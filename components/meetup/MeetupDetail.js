import { useRouter } from 'next/router';
import Image from 'next/image';
import classes from './MeetupDetail.module.css';

const MeetupDetail = props => {
  const router = useRouter();

  const goBackHandler = () => {
    router.push('/');
  };
  //{props.image}
  return (
    <section className={classes.detail}>
      <Image src="/meetup" alt={props.title} width="1200" height="630" />
      <h2>{props.title}</h2>
      <address>{props.address}</address>
      <p>{props.description}</p>
      <button className="button" onClick={goBackHandler}>
        Go Back
      </button>
    </section>
  );
};

export default MeetupDetail;
