import React from 'react'
import logo from '../assets/airbnb.png';
import netlogo from '../assets/internet.png';
import menu from '../assets/hamburger.png';
import user from '../assets/user.png';


const Header = () => {
  return (
    <div className='header'>
      <div className='header_logo'>
        <img src={logo} alt='logo' width='30px' height='30px'/>
        <span>airbnb</span>
      </div>
      <div className='header_right_side'>
        <h5>Become a host</h5>
        <img src={netlogo} alt='logo' width='20px' height='20px'/>
        <div className='header_right_side_user'>
          <img src={menu} alt='logo' width='20px' height='20px'/>
          <img src={user} alt='logo' width='20px' height='20px'/>
        </div>
      </div>
    </div>
  )
}

export default Header;