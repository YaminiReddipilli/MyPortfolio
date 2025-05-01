import React from 'react'
import HeroImage from '../assets/my-photo.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage}  alt="photo" className='mx-auto mb-8 w-48 h-48 rounded-full bgject-cover transform transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4x1 font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Yamini Reddipilli</span>
            , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            Passionate Full-Stack Developer focused on building scalable web applications with seamless user experiences and robust backend systems.
        </p>
        <div className='mt-8 space-x-4'>
            <a href='#contact' className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</a>
            <a href="./MyPortfolio/YaminiReddipilli-Resume.pdf" target="_blank" className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</a>
        </div>
    </div>
  )
}

export default Hero