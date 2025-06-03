"use client"

import { useState, useEffect } from 'react'
import { useRouter, redirect } from "next/navigation";
import Link from "next/link"
import Image from "next/image"

import SignIn from '@components/SignIn';

import { signIn, signOut, useSession, getProviders} from "next-auth/react"

const Login = () => {

  const [SignedIn, setSignedIn] = useState(false)
  const [signinIn, setSigninIn] = useState(false)
  
  const {data: session} = useSession()
  
  const [LoginData, setLoginData] = useState({
    email: '',
    password: ''
    })    
    
    const [providers, setProviders] = useState(null)
    
    const handleLogin = async (e) => {
      setSigningIn(true)
      e.preventDefault()
      const response = await fetch('/api/auth/local', 
        {
          method: "POST",
          body: JSON.stringify(LoginData)
        }
      )
      const data = await response.json()
      
      if(data.success){
        alert(data.message)
        setSignedIn(true)
        setSigningIn(false)
        redirect('/')
      }
    }
    
    
    
    useEffect(() => {
      const setUpProviders = async () => {
        const response = await getProviders()
        setProviders(response)
      }    
      setUpProviders();
      
    },[])
    
    return (
      <>
      <SignIn
        LoginData={LoginData}
        setLoginData={setLoginData}  
        signIn={signIn}
        handleLogin={handleLogin}
        providers={providers}
        signinIn={signinIn}
        setSigninIn={setSigninIn}
      />
      </>
  )
}

export {useSession, signIn, signOut, getProviders}



export default Login