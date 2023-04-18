import React from 'react'
import Sidebar from './components/Sidebar'
import Landing from './components/Landing'
import './components/Sidebar.css'

const Homepage = () => {
  return (
    <>
        <div className='flex bg-black'>
            <div>
                <Sidebar/>
            </div>
            <div className='max-w-full'>
                <Landing/>
            </div>

        </div>
    </>
  )
}

export default Homepage