import React from 'react'
import SysData from './SysData'
import System from './System'

const SystemIndex = () => {
  return (
            <>
            <section className='system'>
            <div className='system-container container'>
            <div className='system-heading'>
            <h1>Wood Truss System</h1>
            <p>The leading supplier of new and used truss equipment. Combining the qualities and expertise, you should expect from an industry supplier.</p>
            </div>

            <div className='system-items'>
            {
                SysData.map((item, index)=>
                <System
                    sysHeading={item.heading}
                    sysText={item.text}
                    sysImage={item.image}
                    key = {item.heading + index}
                />             
                )     
            }
            </div>
           
            </div>
        </section>
            </>
  )
}

export default SystemIndex