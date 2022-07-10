import Head from 'next/head';
import ProfilePage from '../components/ProfilePage';

export default function ProfilePagePage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/global.css" />
      </Head>
      <ProfilePage />  
    </>
  );
}