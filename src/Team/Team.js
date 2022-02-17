import React from 'react'
import './Team.css'

const Team = () => {
  return (
    <>
        <section className='team'>
            <div className='team-container container'>
                <div className='team-left'>
                <div className='team-textarea-left'>
                <h1>Our Team</h1>
                <p>Nunc mi ipsum faucibus vitae aliquet. Pellentesque elit eget gravida cum sociis natoque penatibus. Urna duis convallis convallis tellus id interdum velit. Proin sed libero enim sed faucibus turpis in.</p>
                </div>
                <button className='btn-team'>Read More</button>
                </div>
                <div className="team-right">
                <div className='team-textarea-right'>
                <h1>Subscribe</h1>
                    <p>Subscribe to our mailing list to get updates about our upcoming products, special offers and free giveaways.</p>
                    <input className='input-team' type="text" placeholder='Enter your Email' />
                    
                    
                </div>
                
                    <button className='btn-sub'>Subscribe</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Team