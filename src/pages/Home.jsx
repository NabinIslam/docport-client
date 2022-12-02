import React from 'react';
import ContactUs from '../components/ContactUs';
import Hero from '../components/Hero';
import Info from '../components/Info';
import MakeAppointment from '../components/MakeAppointment';
import OurServices from '../components/OurServices';
import TestimonialSection from '../components/TestimonialSection';
import Treatment from '../components/Treatment';

const Home = () => {
  return (
    <div>
      <Hero />
      <Info />
      <OurServices />
      <Treatment />
      <MakeAppointment />
      <TestimonialSection />
      <ContactUs />
    </div>
  );
};

export default Home;
