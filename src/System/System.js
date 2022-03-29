import React from 'react'
import './System.css'

const System = ({sysHeading, sysText, sysImage}) => {
  return (
    <>
        
                    
<div className='system-text' data-aos="flip-left">
<div className='card'>
  <h1>{sysHeading}</h1>
  </div>
  <div className='system-para'>
  <p>{sysText}</p>
  </div>
      </div>
      <div className='system-image' data-aos="flip-right">
      <img src={sysImage} alt="" />
      </div>                
                  
           
    </>
  )
}

export default System