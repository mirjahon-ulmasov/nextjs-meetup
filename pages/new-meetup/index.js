import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetup/NewMeetupForm';

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async enteredMeetup => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetup),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    router.push('/');
  };

  return (
    <Fragment>
      <Head>
        <title>Meetups | Add New</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
