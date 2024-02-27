import React from 'react'
import '../styles/header.style.css'
const Header = () => {
  return (
    <div className='header'>
         <h4>Header</h4>
         <div className='right-side-header'>
              <h3>Guest</h3>
              <div>
              <button>Log In/SignUp</button>
              </div>
         </div>
    </div>
  )
}

export default Header