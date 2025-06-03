import Loading from '@app/profile/loading'
import Link from 'next/link'
import Image from 'next/image'
import loader from "@public/assets/icons/loader.svg"


const Form = ({
   type, post, setPost, submitting, 
   setSubmitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform
      </p>
      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label htmlFor="">
          <span className="font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea name="" id="" value={post.prompt} 
          onChange={(e) => setPost({...post, prompt: e.target.value})}
          placeholder='Write your prompt here...'
          required
          className='form_textarea' />
        </label>

        <label htmlFor="">
          <span className="font-semibold text-base text-gray-700">
            Tag{` `}<span className='font-normal'>(#product, #webdevelopment, #idea)</span>
          </span>
          <input name="" id="" value={post.tag} 
          onChange={(e) => setPost({...post, tag: e.target.value})}
          placeholder='#tag'
          required
          className='form_input' />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href={'/'} className='text-gray-500 text-sm'>
          Cancel
          </Link>
          <button type='submit' disabled={submitting} className={`${submitting === true ? 'bg-transparent' : 'bg-amber-600'} cursor-pointer px-5 py-1.5 rounded-full border-0 text-white`} >
            {submitting? (
                   <div className=' w-max rounded-full '>
                   <Image
                      src={loader}
                      width={45}
                      height={45}
                      alt='loader'
                      className='object-contain'
                      />
              </div>
            ) : `${type}`}
          </button>
          
        </div>
      </form>
    </section>
  )
}

export default Form