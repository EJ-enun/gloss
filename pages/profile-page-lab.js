import Head from 'next/head';
import ProfilePageLab from '../components/ProfilePageLab';

export default function ProfilePageLabPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/global.css" />
      </Head>
      <ProfilePageLab />  
    </>
  );
}