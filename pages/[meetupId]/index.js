import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';

import MeetupDetail from '../../components/meetup/MeetupDetail';

const MeetupDetailPage = props => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail {...props.meetupData} />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://Mirjahon:reactdeveloper@cluster0.jlmh3.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollections = db.collection('meetups');

  const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: { meetupId: meetup._id.toString() },
    })),

    // [
    //   {
    //     params: {
    //       meetupId: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m2",
    //     },
    //   },
    // ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  // fetch data for a single meetup
  const client = await MongoClient.connect(
    'mongodb+srv://Mirjahon:reactdeveloper@cluster0.jlmh3.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollections = db.collection('meetups');

  const selectedMeetup = await meetupsCollections.findOne({
    _id: ObjectId(meetupId),
  });

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetailPage;
