import { useRouter } from "next/router";
import Image from "next/image";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  const router = useRouter();

  const goBackHandler = () => {
    router.push("/");
  };

  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} layout="fill" />
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
