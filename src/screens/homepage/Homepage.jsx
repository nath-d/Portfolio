import React from 'react'
import Sidebar from './components/Sidebar'
import Landing from './components/Landing'
import './components/Sidebar.css'
import Navbar from './components/Navbar'

const Homepage = () => {

  return (
    <>
        <div className='bg-[#0A1828]'>
            <div>
                <Navbar/>
            </div>
            <div className='max-w-full'>
                <Landing/>
            </div>

        </div>
    </>
  )
}

export default Homepage