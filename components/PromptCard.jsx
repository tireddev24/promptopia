"use client"

import {useState} from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

const PromptCard = ({post, handleTagClick, handleEdit, handleDelete, handleViewProfile}) => {

  const {data: session} = useSession()
  const pathName = usePathname()
  const router = useRouter()

  const [Copied, setCopied] = useState("")


  const handleCopy = () => {

    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => setCopied(""), 3000)

  }
  
  const handleProfile = () => {
        if(post.creator._id === session?.user.id ){
          return router.push('/profile')
        }
        router.push(`/profile/${post.creator._id}?name=${post.creator.username}`)
  }


  return (
    <div className="prompt_card">
      <div className="flex justify-between items start gap-5">
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <Image 
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />
         
          <div className="flex flex-col" onClick={handleProfile}>
            <h3>{post.creator.username}</h3>
            <p className='font-inter text-sm text-gray-500'>{post.creator.email}</p>
          </div>
    
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image 
            src={Copied === post.prompt?
              '/assets/icons/tick.svg' : 
              '/assets/icons/copy.svg'}
            alt='Copy prompt'
              width={12}
              height={12}
          />

        </div>
      </div>
      <p className='my-4 font-mono text-sm text-gray-700'>{post.prompt}</p>
      <p className='font-serif text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >{post.tag}</p>

      {session?.user.id === post.creator._id && pathName === '/profile' && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p className="text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p className="text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>

      )}
    </div>
  )
}

export default PromptCard