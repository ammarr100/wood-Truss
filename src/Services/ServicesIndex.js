import React from 'react';
import Sdata from './Sdata';
import Services from './Services';

const ServicesIndex = () => {
  return (
    <>
      <section className="services">
        <div className="services-container container">
          {Sdata.map((items, index) => (
            <Services
              icon={items.Icon}
              heading={items.Heading}
              text={items.Text}
              key={items.Heading + index}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesIndex;
