import React from 'react'


const Middle = (props) => {


  return (
    <div className='Middle_parent'>
    <div className='Middle'>
      <div className='Middle_img'>
        <img src={props.image} alt="load" />
        <img src={props.like} alt="heart" />
      </div>
      <div className='Middle_star'>
        <img src={props.star} alt="load" />
        <span>{props.rating}</span>
      </div>
      <div className='Middle_text'>
        <span>{props.name}</span>
        <h5>{props.rupee}</h5>
      </div>
    </div>
    </div>
  )
}

export default Middle;