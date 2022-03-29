import React from 'react'
import './Work.css'
import {TiTick} from 'react-icons/ti'
const Work = () => {
  return (
    <>
        <section className='work'>
            <div className='work-container container'>
                <div className='work-items-1'>
                    <div className='work-text-01' >
                    <h2>Sure, we’ve been around the block.
                    We probably worked with the people who built it. </h2>
                    <p>Dui ut ornare lectus sit. Tincidunt lobortis feugiat vivamus at augue eget arcu. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Sodales neque sodales ut etiam sit amet nisl. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Vitae suscipit tellus mauris a.</p>
                    <div className='work-image-01' data-aos="flip-left">
                    <img src='work/work01.jpg' alt="" />
                    </div>
                    </div>
                    <button className='btn-work'>Learn More</button>
                </div>
                <div className='work-items-2'>
                <div className='work-image-02' data-aos="flip-right">
                <img src='work/work02.jpg' alt="" />
                </div>
                <div className='work-text-02'>
                <h2>Earning your business with experience, expertise, and trust.</h2>
                </div>
                <ul>
                
                <li><TiTick className='tick'/>Component Production Equipment</li>
                <li><TiTick className='tick'/>Wall Panel Framing and Sheathing Equipment</li>
                <li><TiTick className='tick'/>Linear Saws</li>
                <li><TiTick className='tick'/>Saws-Component, Radial Arm, Automated Measuring Systems</li>
                <li><TiTick className='tick'/>Material Handling Systems</li>
                <li><TiTick className='tick'/>Roll-Off Truss Trailers</li>
                <li><TiTick className='tick'/>Waste Reduction Equipment</li>
                <li><TiTick className='tick'/>Replacement Production Surfaces</li>
                <li><TiTick className='tick'/>Plant Layout Experts/Production Consultants</li>             
                </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Work
                
                
                
                
                
                
                
                