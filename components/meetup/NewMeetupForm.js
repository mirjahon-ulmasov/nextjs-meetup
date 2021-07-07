import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const titleRef = useRef();
  const imgRef = useRef();
  const addressRef = useRef();
  const descriptonRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const title = titleRef.current.value;
    const image = imgRef.current.value;
    const address = addressRef.current.value;
    const description = descriptonRef.current.value;

    const meetupData = {
      title,
      image,
      address,
      description,
    };

    props.onAddMeetup(meetupData);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label>
          Meetup Title
          <input type="text" required ref={titleRef} />
        </label>
      </div>
      <div className={classes.control}>
        <label>
          Meetup Image
          <input type="url" required ref={imgRef} />
        </label>
      </div>
      <div className={classes.control}>
        <label>
          Address
          <input type="text" required ref={addressRef} />
        </label>
      </div>
      <div className={classes.control}>
        <label>
          Description
          <textarea rows="5" required ref={descriptonRef} />
        </label>
      </div>
      <div className={classes.actions}>
        <button type="submit" className="button">
          Add Meetup
        </button>
      </div>
    </form>
  );
};

export default NewMeetupForm;
