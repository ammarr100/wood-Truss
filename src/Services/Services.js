import React from 'react';
import './Services.css';

const Services = ({ icon, heading, text }) => {
  return (
    <>
      <div className="services-items" data-aos="flip-left">
        <div className="service-icon">
          <i class={`icon-colors ${icon}`}></i>
        </div>
        <div className="service-heading">
          <h1>{heading}</h1>
        </div>
        <div className="service-text">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Services;
