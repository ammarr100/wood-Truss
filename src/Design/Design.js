import React from 'react'
import './Design.css'
import design from '../Design/design.jpg'
const Design = () => {
  return (
    <section className='design'>
        <div className='design-container container'>
            {/* <div className='design-items'> */}
                <div className='design-image'>
                <img src={design} alt="" />
                </div>
                <div className='design-heading'>
                <h1>An innovative design suite for wooden structures</h1>
                </div>
                <div className='design-text'>
                <p>Pharetra magna ac placerat vestibulum lectus mauris ultrices. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Sollicitudin ac orci phasellus egestas tellus rutrum. Venenatis cras sed felis eget. Amet risus nullam eget felis eget nunc. Lacus vestibulum sed arcu non odio euismod. Consectetur adipiscing elit duis tristique.</p>
                </div>
                
                <button className='btn-design'>Learn More</button>
                
            </div>
        {/* </div> */}
    </section>
  )
}

export default Design