import React from 'react'
import './Staff.css'

const Staff = ({staffImage, lorem10, staffName, staffPosition}) => {
  return (
    
            <div className='staff-items' data-aos="fade-up">
            <div className='staff-image'>
            <img src={staffImage} alt="" />
            </div>
            <div className='staff-text'>
            <p>{lorem10}</p>
            </div>
            <div className='staff-name'>
            <h2>{staffName}</h2>
            <h1>{staffPosition}</h1>
            
            </div>
            </div>
       
  )
}

export default Staff