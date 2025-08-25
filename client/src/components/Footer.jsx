import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 1g:px-24 x1:px-32 bg-primary/3'>
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
        <div>
          <img src={assets.logo} alt="logo" className='w-32 sm:w-44'  />
          <p className='max-w-[410px] mt-6'>Welcome to MyBlog, a space where ideas turn into conversations. We share stories, insights, and experiences to spark curiosity and inspire growth. Whether you’re here to learn, explore, or simply read something new, we’re glad to have you with us.</p>
        </div>

        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
          {footer_data.map((section, index) =>(
            <div key={index}>
              <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
              <ul className='text-sm space-y-1'>
                {section.links.map((link, i)=>(
                  <li key={i}>
                    <a href={link.url} 
                    className='hover:underline transition' 
                    target={link.url.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
           ))}
        </div>

      </div>
      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>Copyright 2025 © - All Right Reserved.</p>
      
    </div>
  )
}

export default Footer
