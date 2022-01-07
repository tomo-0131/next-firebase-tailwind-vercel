import Head from 'next/head'
import Image from 'next/image'
import Todos from '../components/Todos'
import { useAuthContext } from '../context/AuthContext'
import styles from '../styles/Home.module.css'

export default function Home() {

  const { user } = useAuthContext();

  return (
    <div>
      <Head>
        <title>Talexy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        { user ? (
          <Todos />
        ) : (
          <div className='flex grid items-center justify-center'>
            <h1 className='text-2xl my-8 p-7 lg:text-3xl'>Make your small dreams come true</h1>
            <h2 className='text-xl -mt-12 my-0 p-7 lg:my-12'>小さな積み重ねが自己肯定感を高めてくれるはず 👍</h2>
            <button className='border-teal-500 border m-2 p-2 w-40 ml-28 sm:ml-40 md:ml-40 lg:ml-40'>GET STARTED</button>
          </div>
        ) }
      </div>
    </div>
  )
}
