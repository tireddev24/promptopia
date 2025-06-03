import React from 'react'
import PromptCard from './PromptCard'
import Loading from '@app/profile/loading'

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className="blue_gradient">{name} profile</span>
      </h1>
      <p className='desc text-left'>
        {desc}
      </p>
      {!data && <Loading />}
      {data && 
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard 
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete ={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
      }
    
    
    </section>
  )
}

export default Profile  