import React from 'react'
import { logo } from '../assets'


const Hero = () => {
  return (
    <header className='w-full flex justify-center align-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        
        <span className='text-white text-2xl'>Swift<span className='blue_gradient'>Sum</span></span>
        <button
          type='button'
          onClick={() => window.open('https://github.com/NuzNuz')}
          className='github_button'>
          GitHub
        </button>
      </nav>

      <h1 className='head_text '>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='blue_gradient'>
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className='m-auto desc'>
        Simplify your reading with Summize, an open-source article summarizer that transforms long-form articles into short summaries.
      </h2>
    </header>

  )
}

export default Hero