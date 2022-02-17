import React from 'react'
import './Contact.css'
import {TiTick} from 'react-icons/ti'

const Contact = () => {
  return (
    <>
        <section className='contact'>
        <div className='contact-container container'>
    <div className='contact-box'>
        <input className='input-text' type="text" placeholder='Enter your Name' />
        <input className='input-text' type="email" placeholder='Enter your Email' />
        <input className='input-text' type="phone" placeholder='Enter your Phone' />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button type='submit' className='btn-contact'>Submit</button>
    </div>
    <div className='contact-info'>
        <div className='contact-call'>
        <h1 className='contact-heading'>Call us</h1>
        <p>1 (234) 567-891</p><br />
        <p>1 (234) 987-654</p>
        </div>
        <div className='contact-location'>
        <h1 className='contact-heading'>Location</h1>
        <p>121 Rock Sreet, 21 Avenue,
        New York, NY 92103-9000</p>
        </div>
        <div className='contact-top'>
        <h1 className='contact-heading'>Top Services</h1>
        <ul>
            <li><TiTick/> Pre Design</li>
            <li><TiTick/> Schematic Design</li>
            <li><TiTick/> Design Development</li>
            <li><TiTick/> Engineering Consultants</li>
        </ul>
        </div>
    </div>
    <div className='contact-image'>
    <img src="contact/01.jpg" alt="" />
    </div>

        </div>
        </section>
    </>
  )
}

export default Contact