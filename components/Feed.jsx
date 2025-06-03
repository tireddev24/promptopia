"use client"

import {useState, useEffect} from 'react'

import PromptCard from './PromptCard'
import { useRouter } from 'next/navigation'
import Loading from '@app/profile/loading'

const PromptCardList = ({data, handleTagClick, handleViewProfile}) => {
  return (
    <div className="mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCard 
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
            handleViewProfile={handleViewProfile}
          />
        ))}
    </div>
  )
}

const Feed = () => {

  const router = useRouter()

  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])
  const [searchPosts, setSearchPosts] = useState([])


  const handleSearchChange = async () => {
  
    setSearchPosts(posts.filter((p) => p.creator.username.includes(searchText) || 
    p.tag.includes(searchText) || p.prompt.includes(searchText) ) )  
  }

  //run the handleSearchChange function when search value changes
  useEffect(() => {

    handleSearchChange()
    
  },[searchText])

  //set search value when a tag is clicked
  const handleTagClick = async (tag) => {
    setSearchText(tag)
    handleSearchChange()
  }

  const handleViewProfile = async (post) => {
  }


  //fetch all posts from database
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/prompt')
      const data = await res.json()
    
      setPosts(data)    
      setSearchPosts(data)
    }

    fetchPosts()
  },[])

  if(posts.length === 0){
    return (
      <section className='mt-10 mx-auto'>
      <Loading />
      </section>
    )
  }
  
  return (
    <section className='feed'>
      <form action="" className="relative w-full flex-center">
        <input type="text" name="" id="" 
          placeholder='Search for a tag or a username'
          value={searchText}
          required
          onChange={(e) => setSearchText(e.target.value)}
          className='search_input peer'

        />
      </form>
      
      <PromptCardList
        data={searchText? searchPosts : posts}
        handleTagClick={handleTagClick}
        handleViewProfile={handleViewProfile}
      />
    </section>
  )
}

export default Feed