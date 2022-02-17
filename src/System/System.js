import React from 'react'
import './System.css'

const System = ({sysHeading, sysText, sysImage}) => {
  return (
    <>
        
                    
                    <div className='system-text'>
                    <div className='card'>
                        <h1>{sysHeading}</h1>
                        </div>
                        <div className='system-para'>
                        <p>{sysText}</p>
                        </div>
                            </div>
                            <div className='system-image'>
                            <img src={sysImage} alt="" />
                            </div>                
                  
           
    </>
  )
}

export default System