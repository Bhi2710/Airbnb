import React from 'react'

const Footer = (props) => {
  return (
    <>
    <div className='Footer'>
      <div className='Footer_items'>
        <img src={props.image} alt="load" />
        <p>{props.para}</p>
        <h3>{props.heading}</h3>
        <button>{props.buttons}</button>
      </div>
    </div>
    </>
  )
}

export default Footer;