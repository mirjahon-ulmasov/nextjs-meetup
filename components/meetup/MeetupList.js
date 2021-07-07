import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
  const meetup = props.meetups.map((meetup) => {
    return (
      <MeetupItem
        key={meetup.id}
        id={meetup.id}
        title={meetup.title}
        img={meetup.image}
        address={meetup.address}
        description={meetup.description}
      />
    );
  });

  return <div>{meetup}</div>;
};

export default MeetupList;
