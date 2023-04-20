import React from 'react'

const Landing = () => {
  return (
    <div name= 'home' className='w-full h-screen bg-[#0A1828]'>

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-300 font-mont text-base p-2'>Hi, I am</p>
        <h1 className='text-4xl sm:text-7xl font-lato text-[#BFA181] font-thin'>Debarshi Nath.</h1>
        <h2 className='text-4xl sm:text-8xl font-lato text-[#BFA181] font-bold'>FULL STACK DEVELOPER</h2>


      </div>
      
    </div>
  )
}

export default Landing


