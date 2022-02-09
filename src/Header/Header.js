import React from 'react';
import './Header.css';
import header from '../Header/header.jpg';

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="header-container container">
          <div className="header-text">
            <h2>About Company</h2>
            <h1>What wood is used for house building ?</h1>
            <button className="header-btn">
              <a href="">Read More</a>
            </button>
          </div>
          <div className="header-image">
            <img src={header} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
