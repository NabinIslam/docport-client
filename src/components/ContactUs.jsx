import React from 'react';
import './ContactUs.css';
import HomeContactForm from './HomeContactForm';

const ContactUs = () => {
  return (
    <section className="contact_us_bg py-12">
      <div className="container mx-auto px-4 sm:p-0">
        <h4 className="text-primary text-center font-bold text-lg ">
          Contact Us
        </h4>
        <h2 className="text-3xl text-white text-center font-semibold">
          Stay connected with us
        </h2>
        <HomeContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
