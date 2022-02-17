import React from 'react'
import Staff from './Staff'
import StaffData from './StaffData'

const StaffIndex = () => {
  return (
      <>
      <section className='staff'>
      <div className='staff-heading container'>
      <h1>Our Staff is here to Help</h1>
      </div>
      
        <div className='staff-container container'>
   {
       StaffData.map((item, index)=>
       <Staff
           staffImage={item.sImage}
           lorem10 = {item.lorem}
           staffName = {item.sName}
           staffPosition = {item.sPosition}
           key = {item.lorem + index}
       />
       )
   }
   </div>
    </section>
   </>
  )
  
}

export default StaffIndex