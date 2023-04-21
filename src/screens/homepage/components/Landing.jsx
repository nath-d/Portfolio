import React, { useState, useRef, useEffect } from 'react'
import lottie from "lottie-web";



const Landing = () => {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../codeTyping.json')
    })
  }, [])

  return (
    <div name='home' className='w-full h-screen bg-[#0A1828] lg:flex'>

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full lg:ml-[100px]'>
        <p className='text-gray-300 font-mont text-base p-2'>Hi, I am</p>
        <h1 className='text-4xl sm:text-7xl font-lato text-[#BFA181] font-thin z-10'>Debarshi Nath.</h1>
        <br />
        <br />
        <h2 className='text-4xl sm:text-8xl font-lato text-[#BFA181] font-bold'>FULL STACK DEVELOPER</h2>
        <br />
        <hr className='border-1 border-[#BFA181] w-11/12' />
      </div>
      <div className='container overflow-hidden w-1/2 h-5/6 mt-[120px] mr-[50px] pr-14' ref={container}>
      </div>
    </div>
  )
}

export default Landing

// https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif

