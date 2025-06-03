

import Loading from "@app/profile/loading"
import loader from '@public/assets/icons/loader.svg'
import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const SignIn = ({setLoginData, LoginData, signIn, providers, handleLogin, signinIn, setSigninIn}) => {

  return (
    <>
        {signinIn && <div className="absolute top-0 flex-center backdrop-brightness-[0.7] cursor-not-allowed w-screen h-dvh">
                   <Image
                      src={loader}
                      width={130}
                      height={130}
                      alt='loader'
                      className='object-contain'
                      />
          </div> }
    <div className=' rounded-lg mt-36 '>
        {!providers? 
        <div className='mt-3'>
          <Loading /> 
        </div>
        : 
        (
          <>
            <div className={` ${signinIn? 'cursor-not-allowed' : 'cursor-auto'} bg-white gap-5 p-10  `}>
            <h1 className='text-4xl h-max font-bold blue_gradient'>Login to promptopia</h1>
            <div className='flex-center mt-8  flex-col gap-4'>
              <form action="" className= "hidden w-full flex-col justify-center gap-4">
              <input type="email" name="" id="email" 
                placeholder='Email address'
                value={LoginData.email}
                required
                onChange={(e) => setLoginData({...LoginData, email:e.target.value})}
                className='search_input peer'
                
                />
            <input type="password" name="" id="password" autoComplete=''
            placeholder='Password'
            value={LoginData.password}
            required
            onChange={(e) => setLoginData({...LoginData, password:e.target.value})}
            className='search_input peer'
            
            />
            <button className='black_btn' onClick={handleLogin}>Login</button>
          <div className='max-w-full'>
            <span className='inline-block bg-gray-500  w-36  h-[2px] mb-1'></span>
            <span className='mx-4'>OR</span>
            <span className='inline-block bg-gray-500  w-36  h-[2px] mb-1'></span>
          </div>
          </form>
        {providers && Object.values(providers).map((provider) => (
          <button type="button"
          key={provider.name}
          onClick={async () => { 
            setSigninIn(true)
            await signIn(provider.id, {callbackUrl: "/"})
            setSigninIn(false)

          }}
          className="signin_btn  cursor-pointer w-full"
          >
         {provider.name.toLowerCase() === 'github'?
         <FaGithub className='h-10 w-10 mr-2' /> : 
         <FcGoogle className='h-10 w-10 mr-2' />
        }
         {provider.name}
        </button> ))}
        </div>
        </div>
        </> ) 
        }

    </div>

    </>
  )
}

export default SignIn