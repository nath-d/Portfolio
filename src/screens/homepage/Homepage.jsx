import React from 'react'
import Sidebar from './components/Sidebar'
import Landing from './components/Landing'
import './components/Sidebar.css'

const Homepage = () => {
  const red = {backgroundColor: "#C3073F"}
  const pink = {backgroundColor: "#950740"}
  const darkRed = {backgroundColor: "#6F2232"}
  const grey = {backgroundColor: "#4E4E50"}
  const darkGrey = {backgroundColor: "#1A1A1D"}
  return (
    <>
        <div className='flex' style={{...darkGrey}}>
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