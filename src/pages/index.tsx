import Head from 'next/head'
import Image from 'next/image'
import Todos from '../components/Posts'
import { UseAuthContext } from '../context/AuthContext'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalGuestLogin, modalLogin } from '../components/atoms/modalAtom'
import ModalLogin from '../components/ModalLogin'
import Posts from '../components/Posts'
import ModalGuestLogin from '../components/ModalGuestLogin'

export default function Home() {

  const { user }: any = UseAuthContext();

  const [ open, setOpen ] = useRecoilState(modalLogin)

  const [ openGuestModal, setOpenGuestModal ] = useRecoilState(modalGuestLogin)

  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Talexy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='h-full mb-12'>
        { user ? (
          <Posts />
        ) : (
          <div className='flex grid items-center justify-center'>
            <h1 className='text-2xl my-3 p-5 text-center lg:text-3xl lg:p-9 lg:my-3'>⚡️Talexy</h1>
            <h1 className='text-2xl p-1 text-center lg:mb-8 lg:text-3xl'>Make your small goals come true!</h1>
            <img className='shadow-lg flex justify-center items-center my-4 mb-8' src='https://image.freepik.com/free-vector/business-team-work-process-steps-from-idea-target-business-workflow-business-process-efficiency-working-activity-pattern-concept-pinkish-coral-bluevector-isolated-illustration_335657-1649.jpg' />
            <div className='flex justify-center items-center'>
              <button onClick={() => setOpen(true)} className='bg-teal-500 text-white border m-2 p-1 w-40 rounded-lg hover:bg-teal-600'>Log in</button>
              <button onClick={() => router.push('/about')} className='border text-white bg-yellow-400 m-2 p-1 w-40 rounded-lg hover:bg-yellow-500'>About</button>
            </div>
            <button onClick={() => setOpenGuestModal(true)} className='bg-blue-500 text-white border m-2 p-1 w-40 ml-28 rounded-lg hover:bg-blue-600 lg:ml-56'>ゲストログイン</button>
            <ModalGuestLogin />
          </div>
        ) }
      </div>
    </div>
  )
}
