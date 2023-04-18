import React from 'react'

const Landing = () => {
  const red = { backgroundColor: "#C3073F" }
  const pink = { backgroundColor: "#950740" }
  const darkRed = { backgroundColor: "#6F2232" }
  const grey = { backgroundColor: "#4E4E50" }
  const darkGrey = { backgroundColor: "#1A1A1D" }

  return (
    <>
      <div className='flex'>
        <div>
          <h1 className='text-5xl text-white font-lato font-thin'>
            Hi, I'm Debarshi...<br />
          </h1>
          <p className='text-2xl text-white font-mont p-14'>
            Welcome to my Portfolio.
          </p>
        </div>
        <img className='blur-sm w-1/2 ml-96' src='https://www.pngplay.com/wp-content/uploads/13/Programmer-PNG-Free-File-Download.png' />
      </div>
    </>
  )
}

export default Landing


// src='https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'