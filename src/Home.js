import React from 'react';
import Contact from './Contact/Contact';
import Design from './Design/Design';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';
import ServicesIndex from './Services/ServicesIndex';
import StaffIndex from './Staff/StaffIndex';
import SystemIndex from './System/SystemIndex';
import Team from './Team/Team';
import Work from './Work/Work';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ServicesIndex />
      <SystemIndex/>
      <Work/>
      <Team/>
      <StaffIndex/>
      <Design/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
