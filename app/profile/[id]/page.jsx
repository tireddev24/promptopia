"use client"

import React, {useState, useEffect} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'

import Profile from '@components/Profile'

const MyProfile = ({params}) => {

    const searchParams = useSearchParams()
    const username = searchParams.get('name')

    const userParams = React.use(params)
 

    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        const fetchPosts = async () => {
          const res = await fetch(`/api/users/${userParams.id}/posts`)
          const data = await res.json()
          setPosts(data)    
        }
    
        if(userParams.id) fetchPosts()

      },[userParams.id])


  return (
    <Profile 
        name={`${username}'s`}
        desc={`Welcome to ${username}'s personalized profile page. Explore ${username}'s prompts and make the most of your AI with them! `}
        data={posts}
    />
  )
}

export default MyProfile