import React from 'react'

const Landing = () => {
  const red = {backgroundColor: "#C3073F"}
  const pink = {backgroundColor: "#950740"}
  const darkRed = {backgroundColor: "#6F2232"}
  const grey = {backgroundColor: "#4E4E50"}
  const darkGrey = {backgroundColor: "#1A1A1D"}
  
  return (
    <>
      <div className='flex items-center w-full'>
        <div className='flex items-center justify-between'>
          {/* <img className='w-full h-auto ml-96' src='https://thumbs.gfycat.com/ColorlessBitesizedKob-max-1mb.gif'></img> */}
          <div className='text-8xl text-white carDiv p-14 font-lato font-thin'>
            WELCOME TO PORTFOLIO
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing


// src='https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'