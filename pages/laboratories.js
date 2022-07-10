import Head from 'next/head';
import Laboratories from '../components/Laboratories';

export default function LaboratoriesPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/global.css" />
      </Head>
      <Laboratories />  
    </>
  );
}