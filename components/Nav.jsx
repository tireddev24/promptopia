"use client"

// import Link from "next/link"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Login from "@app/signin/page"
import {signIn, useSession, signOut, getProviders } from '@app/signin/page.jsx'

const Nav = () => {


  const {data: session} = useSession()
  const router = useRouter()
  const [toggleDropDown, setToggleDropDown] = useState(false)
  const pathname=  usePathname()

  return (
    <nav className="flex justify-between w-full mb-16 pt-3">
      <Link href={"/"} className="flex gap-2 flex-center">
        <Image src={"/assets/images/logo.svg"}
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">
          Promptopia
        </p>
      </Link>

      <Link href={"/profile"}>
      
      </Link>
        {/* desktop navigation */}
      <div className="sm:flex hidden">
        {session?.user?(
          <div className="flex gap-3 md:gap-5">
            {!pathname.includes('create') && 
            <Link href={'/create-prompt'} className="black_btn cursor-pointer">
            Create Post</Link>}
            <button type="button cursor-pointer" onClick={() => signOut({callbackUrl: '/'})} className="outline_btn cursor-pointer">Sign Out</button>
            <Link href={"/profile"}>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile"
              />
            </Link>
          </div>
        ) : (
        <>
            {/* providers && 
              Object.values(providers).map((provider) => (
               <button type="button"
               key={provider.name}
               onClick={() => signIn(provider.id)}
               className="black_btn cursor-pointer"
               >
              Sign In with {provider.name}  
              </button>
            ))} */}
           {!pathname.includes('signin') &&  <button className="black_btn " onClick={() => router.push(`/signin/`)}>Sign in</button>}
        </>) }
      </div>


      {/* mobile navigation */}
      
      <div className="flex sm:hidden relative">
      {session?.user? (
          <div className="flex">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile"
                onClick={() => {setToggleDropDown(!toggleDropDown)}}
              />
            {toggleDropDown && (
              <div className="dropdown">
                <Link href={"/profile"}
                className="dropdown_link"
                onClick={() => setToggleDropDown(false)}>
                  My Profile
                </Link>
                {!pathname.includes('create-prompt') &&  <Link href={"/create-prompt"}
                className="dropdown_link"
                onClick={() => setToggleDropDown(false)}>
                  Create
                </Link>
                }
                <Link href={'./'}>
                <button onClick={() => {setToggleDropDown(false); signOut();}}
                  className="mt-5 w-full black_btn"
                  >
                    Sign Out
                </button>
                </Link>
              </div>
            )}

          </div>
        ) : (
           <>
           {!pathname.includes('signin') &&  <button className="black_btn  " onClick={() => router.push(`/signin/`)}>Sign in</button>}
            
          </>
        )}
        </div>


      
    </nav>
  )
}

export default Nav