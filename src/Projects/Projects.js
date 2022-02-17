import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
   <>
       <section className='projects'>
       <div className='proj-heading'>
       <h1>Our Construction Projects</h1>
       </div>        
            <div className='projects-container container'>
                <div className='proj-img'>
                <img src="project/01.jpg" alt="" />   
                </div>
                <div className='proj-text01'>
                <p>Dui ut ornare lectus sit. Tincidunt lobortis feugiat vivamus at augue eget arcu. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Sodales neque sodales ut etiam sit amet nisl. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Vitae suscipit tellus mauris a.</p>
                </div>
                <div className='proj-text02'>
                <p>Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Sodales neque sodales ut etiam sit amet nisl. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Vitae suscipit tellus mauris a.</p>
                <button className='btn-proj'>Learn More</button>
                </div>
            </div>
       </section>
   </>
  )
}

export default Projects