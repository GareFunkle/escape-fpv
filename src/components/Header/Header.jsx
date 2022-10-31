import React from 'react'

import "./Header.css"

const Header = () => {
  return (
    <div className='app__bg'>
      <img className='bg' src="../../src/assets/bg.jpg" alt="bg" />
      <div className="wrap">
       <img className='logo' src="../../src/assets/big.png" alt="logo" />
      </div>
    </div>
  )
}

export default Header