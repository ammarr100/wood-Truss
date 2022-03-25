import React, { useState } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { FiMenu } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const openHam = (
    <FiMenu className="ham-open" onClick={() => setToggle(!toggle)} />
  );
  const closeHam = (
    <CgClose className="ham-close" onClick={() => setToggle(!toggle)} />
  );
  return (
    <>
      <section className="navbar-desktop">
        <div className="desktop-container container">
          <div className="logo">
            
            <NavLink to="/">Logo</NavLink>
          </div>
          <div className="desktop-menulinks">
            <Desktop />
          </div>
        </div>
      </section>

      <section className="navbar-mobile">
        <div className="mobile-container">
          <div className="ham-icon">{toggle ? closeHam : openHam}</div>
          <div className="mobile-menulinks">{toggle && <Mobile />}</div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
