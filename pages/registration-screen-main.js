import Head from 'next/head';
import RegistrationScreenMain from '../components/RegistrationScreenMain';

export default function RegistrationScreenMainPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/global.css" />
      </Head>
      <RegistrationScreenMain />  
    </>
  );
}